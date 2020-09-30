import { Classes, RAID_UTILITIES, Specs } from '@app/shared/constants/classes-specs-roles.constants';
import { ClassUtilitiesData, Player } from '@app/shared/models/planner.models';
import { RaidviewState } from '@app/store/raidview/raidview.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cloneDeep } from 'lodash';

const raidviewState = createFeatureSelector<RaidviewState>('raidview');

const initialClassComposition: { [key: string]: number } = {
  DEATH_KNIGHT: 0,
  DEMON_HUNTER: 0,
  DRUID: 0,
  HUNTER: 0,
  MAGE: 0,
  MONK: 0,
  PALADIN: 0,
  PRIEST: 0,
  ROGUE: 0,
  SHAMAN: 0,
  WARLOCK: 0,
  WARRIOR: 0
};

const initialRoleComposition: { [key: string]: number } = {
  TANK: 0,
  HEALER: 0,
  MDPS: 0,
  RDPS: 0
};

const initialUtilitiesData: ClassUtilitiesData = {
  utilities: {
    immunities: 0,
    battleRes: false
  },
  buffs: {
    stamina: false,
    attackPower: false,
    haste: false,
    intellect: false
  },
  debuffs: {
    magic: false,
    physical: false,
    haste: false
  }
};

export const getRoster = createSelector(raidviewState, state => state.planner);
export const getClassComp = createSelector(raidviewState, state => {
  const comp = cloneDeep(initialClassComposition);
  state.planner.players.forEach(player => comp[player.classId]++);
  return comp;
});
export const getRolesComp = createSelector(raidviewState, state => {
  const comp = cloneDeep(initialRoleComposition);
  state.planner.players.forEach(player => comp[player.roleId]++);
  return comp;
});
// export const playersWithoutSelectedSpec = createSelector(raidviewState, state => {
//   const mainComp = cloneDeep(state.planner.players);
//   return mainComp.filter(player => player.specId === '').length;
// });
export const getClassUtilities = createSelector(raidviewState, state => {
  const mainComp = cloneDeep(state.planner.players);
  return mapUtilities(mainComp);
});

function mapUtilities(players: Player[]): ClassUtilitiesData {
  const utilitiesData = cloneDeep(initialUtilitiesData);
  players.forEach(player => {
    if (
      RAID_UTILITIES.IMMUNITIES.includes(player.classId as Classes) ||
      RAID_UTILITIES.IMMUNITIES.includes(player.specId as Specs)
    ) {
      utilitiesData.utilities.immunities++;
    }
    if (RAID_UTILITIES.BATTLE_RES.includes(player.classId as Classes)) {
      utilitiesData.utilities.battleRes = true;
    }
    if (RAID_UTILITIES.BUFFS.STAMINA.includes(player.classId as Classes)) {
      utilitiesData.buffs.stamina = true;
    }
    if (RAID_UTILITIES.BUFFS.ATTACK_POWER.includes(player.classId as Classes)) {
      utilitiesData.buffs.attackPower = true;
    }
    if (RAID_UTILITIES.BUFFS.INTELLECT.includes(player.classId as Classes)) {
      utilitiesData.buffs.intellect = true;
    }
    if (RAID_UTILITIES.BUFFS.HASTE.includes(player.classId as Classes)) {
      utilitiesData.buffs.haste = true;
    }
    if (RAID_UTILITIES.DEBUFFS.HASTE.includes(player.classId as Classes)) {
      utilitiesData.debuffs.haste = true;
    }
    if (RAID_UTILITIES.DEBUFFS.PHYSICAL.includes(player.classId as Classes)) {
      utilitiesData.debuffs.physical = true;
    }
    if (RAID_UTILITIES.DEBUFFS.MAGIC.includes(player.classId as Classes)) {
      utilitiesData.debuffs.magic = true;
    }
  });
  return utilitiesData;
}
