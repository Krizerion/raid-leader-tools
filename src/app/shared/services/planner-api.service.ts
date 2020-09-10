import { Injectable } from '@angular/core';
import { Classes, Roles, Specs } from '@app/shared/constants/classes-specs-roles.constants';
import { Player } from '@app/shared/models/planner.models';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
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
      classId: Classes.PALADIN,
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
    },
    {
      name: 'Octord',
      classId: Classes.PRIEST,
      specId: Specs.PRIEST_SHADOW,
      roleId: Roles.RDPS
    },
    {
      name: 'Rockish',
      classId: Classes.DEATH_KNIGHT,
      specId: Specs.DK_BLOOD,
      roleId: Roles.TANK
    },
    {
      name: 'Wshh',
      classId: Classes.MONK,
      specId: Specs.MONK_WIND,
      roleId: Roles.MDPS
    },
    {
      name: 'Racor',
      classId: Classes.WARLOCK,
      specId: Specs.WLOCK_AFF,
      roleId: Roles.RDPS
    },
    {
      name: 'Verkow',
      classId: Classes.PALADIN,
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
    },
    {
      name: 'Octord',
      classId: Classes.PRIEST,
      specId: Specs.PRIEST_SHADOW,
      roleId: Roles.RDPS
    },
    {
      name: 'Rockish',
      classId: Classes.DEATH_KNIGHT,
      specId: Specs.DK_BLOOD,
      roleId: Roles.TANK
    },
    {
      name: 'Wshh',
      classId: Classes.MONK,
      specId: Specs.MONK_WIND,
      roleId: Roles.MDPS
    },
    {
      name: 'Racor',
      classId: Classes.WARLOCK,
      specId: Specs.WLOCK_AFF,
      roleId: Roles.RDPS
    },
    {
      name: 'Verkow',
      classId: Classes.PALADIN,
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
    },
    {
      name: 'Octord',
      classId: Classes.PRIEST,
      specId: Specs.PRIEST_SHADOW,
      roleId: Roles.RDPS
    },
    {
      name: 'Rockish',
      classId: Classes.DEATH_KNIGHT,
      specId: Specs.DK_BLOOD,
      roleId: Roles.TANK
    }
  ];
  constructor(private store: Store<AppState>) {}

  getPlayers(): Observable<Player[]> {
    return of(this.players);
  }

  editPlayer(player: Player): void {
    this.players[0] = player;
  }

  // TODO: dispatch new player add??
  addPlayer(player: Player): void {
    this.players.push(player);
  }
}
