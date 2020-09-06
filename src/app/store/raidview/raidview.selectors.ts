import { RaidviewState } from '@app/store/raidview/raidview.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const raidviewState = createFeatureSelector<RaidviewState>('raidview');

export const newPlayerData = createSelector(raidviewState, state => state.planner.addNewPlayer);
