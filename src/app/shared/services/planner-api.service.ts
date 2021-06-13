import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Player, PlayerStatus } from '@app/shared/models/planner.models';
import { AppState } from '@app/store';
import { setRosterDataInStore } from '@app/store/raid-leader-tools';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlannerApiService {
  private COLLECTION = 'players';
  constructor(private store: Store<AppState>, private firestore: AngularFirestore) {}

  getPlayers(): void {
    this.firestore
      .collection(this.COLLECTION)
      .snapshotChanges()
      .pipe(map(data => data.map(dbItem => dbItem.payload.doc.data())))
      .subscribe((players: Player[]) => {
        const mainTeam = players
          .filter(player => player.status === PlayerStatus.MainTeam)
          .sort((first, second) => first.index - second.index);
        const becnnh = players
          .filter(player => player.status === PlayerStatus.Bench)
          .sort((first, second) => first.index - second.index);
        this.store.dispatch(
          setRosterDataInStore({
            players: mainTeam,
            backup: becnnh
          })
        );
      });
  }

  moveAllToTeam(status: PlayerStatus): void {
    this.firestore
      .collection(this.COLLECTION)
      .ref.get()
      .then(response => {
        // console.log(response.docs);
        const batch = this.firestore.firestore.batch();
        response.docs.forEach((doc, index) => {
          batch.update(doc.ref, { ...doc.data(), status } as Player);
        });
        batch.commit();
      });
  }

  addEditPlayer(player: Player): void {
    if (!player.id) {
      player.id = this.firestore.createId();
    }
    this.firestore.collection(this.COLLECTION).doc(player.id).set(player, { merge: true });
  }

  updatePlayerById(id: string, status: string): void {
    // const batch = this.firestore.firestore.batch();

    this.firestore.collection(this.COLLECTION).doc(id).set({ status }, { merge: true });
  }

  updatePlayers(main: Player[], bench: Player[]): void {
    main.forEach((player, index) => {
      player.index = index;
      player.status = PlayerStatus.MainTeam;
    });

    bench.forEach((player, index) => {
      player.index = index;
      player.status = PlayerStatus.Bench;
    });

    const allPlayers = [...main, ...bench];

    this.firestore
      .collection(this.COLLECTION)
      .ref.get()
      .then(response => {
        // console.log(response.docs);
        const batch = this.firestore.firestore.batch();
        response.docs.forEach(doc => {
          const updatedPlayer = allPlayers.filter(player => player.id === doc.id)[0];
          batch.update(doc.ref, { ...updatedPlayer });
        });
        batch.commit();
      });
  }

  deletePlayer(id: string): Promise<void> {
    return this.firestore.collection(this.COLLECTION).doc(id).delete();
  }
}
