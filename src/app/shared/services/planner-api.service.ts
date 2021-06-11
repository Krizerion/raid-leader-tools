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
        this.store.dispatch(
          setRosterDataInStore({
            players: players.filter(player => player.status === PlayerStatus.MainTeam),
            backup: players.filter(player => player.status !== PlayerStatus.MainTeam)
          })
        );
      });
  }

  addEditPlayer(player: Player): void {
    if (!player.id) {
      player.id = this.firestore.createId();
    }
    if (!player.status) {
      player.status = PlayerStatus.Bench;
    }
    this.firestore.collection(this.COLLECTION).doc(player.id).set(player, { merge: true });
  }
}
