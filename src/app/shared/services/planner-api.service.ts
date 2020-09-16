import { Injectable } from '@angular/core';
import { Classes, Roles, Specs } from '@app/shared/constants/classes-specs-roles.constants';
import { Player } from '@app/shared/models/planner.models';
import { AppState } from '@app/store';
import { setRosterDataInStore } from '@app/store/raidview';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PlannerApiService {
  private players: Player[] = [
    {
      id: 1,
      name: 'Racor',
      classId: Classes.WARLOCK,
      specId: Specs.WLOCK_AFF,
      roleId: Roles.RDPS
    },
    {
      id: 2,
      name: 'Verkow',
      classId: Classes.PALADIN,
      specId: Specs.PALA_PROT,
      roleId: Roles.TANK
    },
    {
      id: 3,
      name: 'Lyandria',
      classId: Classes.SHAMAN,
      specId: Specs.SHAM_RESTO,
      roleId: Roles.HEALER
    },
    {
      id: 4,
      name: 'Silent',
      classId: Classes.ROGUE,
      specId: Specs.ROGUE_ASSA,
      roleId: Roles.MDPS
    }
    // {
    //   id: 5,
    //   name: 'Verkow',
    //   classId: Classes.PALADIN,
    //   specId: Specs.PALA_PROT,
    //   roleId: Roles.TANK
    // },
    // {
    //   id: 6,
    //   name: 'Lyandria',
    //   classId: Classes.SHAMAN,
    //   specId: Specs.SHAM_RESTO,
    //   roleId: Roles.HEALER
    // },
    // {
    //   id: 7,
    //   name: 'Silent',
    //   classId: Classes.ROGUE,
    //   specId: Specs.ROGUE_ASSA,
    //   roleId: Roles.MDPS
    // }
  ];

  private backup: Player[] = [
    {
      id: 22,
      name: 'Rockish',
      classId: Classes.DEATH_KNIGHT,
      specId: Specs.DK_BLOOD,
      roleId: Roles.TANK
    },
    {
      id: 23,
      name: 'Wshh',
      classId: Classes.MONK,
      specId: Specs.MONK_WIND,
      roleId: Roles.MDPS
    },
    {
      id: 24,
      name: 'Slavi',
      classId: Classes.PALADIN,
      specId: Specs.PALA_HOLY,
      roleId: Roles.HEALER
    }
  ];
  constructor(private store: Store<AppState>) {}

  getPlayers() {
    this.store.dispatch(setRosterDataInStore({ players: cloneDeep(this.players), backup: cloneDeep(this.backup) }));
    // return of(this.players);
  }

  editPlayer(player: Player): void {}

  // TODO: dispatch new player add??
  addPlayer(player: Player): void {}
}
