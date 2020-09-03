import { Injectable } from '@angular/core';
import { CLASSES_IMG, ROLES_IMG, SPECS_IMG } from '@app/shared/constants/classes-img-paths.constants';
import { CLASSES_NAMES } from '@app/shared/constants/classes-names.constants';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlannerApiService {
  private players = [
    {
      name: 'Racor',
      class: CLASSES_IMG.WARLOCK,
      spec: SPECS_IMG.WLOCK_AFF,
      role: ROLES_IMG.RDPS,
      className: CLASSES_NAMES.WARLOCK
    },
    {
      name: 'Verkow',
      class: CLASSES_IMG.PALADIN,
      spec: SPECS_IMG.PALA_PROT,
      role: ROLES_IMG.TANK,
      className: CLASSES_NAMES.PALADIN
    },
    {
      name: 'Lyandria',
      class: CLASSES_IMG.SHAMAN,
      spec: SPECS_IMG.SHAM_RESTO,
      role: ROLES_IMG.HEALER,
      className: CLASSES_NAMES.SHAMAN
    }
  ];
  constructor(private store: Store<AppState>) {}

  getPlayers(): Observable<any> {
    return of(this.players);
  }

  addPlayer(player: any) {
    this.players.push(player);
  }
}
