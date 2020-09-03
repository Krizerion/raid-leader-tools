import { raidviewReducer, RaidviewState } from '@app/store/raidview';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  raidview: RaidviewState;
}

export const reducers: ActionReducerMap<AppState> = {
  raidview: raidviewReducer
};
