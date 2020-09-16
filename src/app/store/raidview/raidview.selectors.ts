import { RaidviewState } from '@app/store/raidview/raidview.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cloneDeep } from 'lodash';

const raidviewState = createFeatureSelector<RaidviewState>('raidview');

export const initialClassComposition: { [key: string]: number } = {
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

export const initialRoleComposition: { [key: string]: number } = {
  TANK: 0,
  HEALER: 0,
  MDPS: 0,
  RDPS: 0
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
export const playersWithoutSelectedSpec = createSelector(raidviewState, state => {
  const mainComp = cloneDeep(state.planner.players);
  return mainComp.filter(player => player.specId === '').length;
});
