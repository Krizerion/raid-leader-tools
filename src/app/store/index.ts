import { raidLeaderToolsReducer, RaidLeaderToolsState } from '@app/store/raid-leader-tools';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  raidLeaderTools: RaidLeaderToolsState;
}

export const reducers: ActionReducerMap<AppState> = {
  raidLeaderTools: raidLeaderToolsReducer
};
