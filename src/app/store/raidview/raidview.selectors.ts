import { RaidviewState } from '@app/store/raidview/raidview.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const isSiteLoading = createFeatureSelector<RaidviewState>('raidview');

export const count = createSelector(isSiteLoading, state => state.isLoading);
