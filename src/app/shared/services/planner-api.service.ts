import { Injectable } from '@angular/core';
import { Classes, Roles, Specs } from '@app/shared/constants/classes-specs-roles.constants';
import { Player } from '@app/shared/models/planner.models';
import { AppState } from '@app/store';
import { viewPlayersData } from '@app/store/raidview/raidview.actions';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlannerApiService {
  private players: Player[] = [
    {
      name: 'Racor',
      classId: Classes.WARLOCK,
      specId: Specs.WLOCK_AFF,
      roleId: Roles.RDPS
    },
    {
      name: 'Verkow',
      classId: Classes.DEATH_KNIGHT,
      specId: Specs.PALA_PROT,
      roleId: Roles.TANK
    },
    {
      name: 'Lyandria',
      classId: Classes.SHAMAN,
      specId: Specs.SHAM_RESTO,
      roleId: Roles.HEALER
    },
    {
      name: 'Silent',
      classId: Classes.ROGUE,
      specId: Specs.ROGUE_ASSA,
      roleId: Roles.MDPS
    }
  ];
  constructor(private store: Store<AppState>) {}

  getPlayers(): Observable<Player[]> {
    this.store.dispatch(viewPlayersData({ players: cloneDeep(this.players) }));
    return of(this.players);
  }

  // TODO: dispatch new player add??
  addPlayer(player: Player): void {
    this.players.push(player);
  }
}
