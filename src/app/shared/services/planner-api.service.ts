import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Player } from '@app/shared/models/planner.models';
import { AppState } from '@app/store';
import { setRosterDataInStore } from '@app/store/raid-leader-tools';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
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
        this.store.dispatch(setRosterDataInStore({ players: cloneDeep(players), backup: [] }));
      });
  }

  addEditPlayer(player: Player): void {
    if (!player.id) {
      player.id = this.firestore.createId();
    }
    this.firestore.collection(this.COLLECTION).doc(player.id).set(player, { merge: true });
  }
}
