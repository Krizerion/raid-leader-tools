import { RaidviewState } from '@app/store/raidview/raidview.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const raidviewState = createFeatureSelector<RaidviewState>('raidview');

export const newPlayerData = createSelector(raidviewState, state => state.planner.addNewPlayer);
export const getRoster = createSelector(raidviewState, state => state.planner.players);
export const getClassComp = createSelector(raidviewState, state => state.planner.classComposition);
export const getRolesComp = createSelector(raidviewState, state => state.planner.roleComposition);
