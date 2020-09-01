import { addNewPlayerBtnClick } from '@app/store/raidview/raidview.actions';
import { RaidviewState } from '@app/store/raidview/raidview.state';
import { Action, createReducer, on } from '@ngrx/store';

export interface State {
  isLoading: boolean;
}

export const initialState: State = {
  isLoading: false
};

const reducer = createReducer(
  initialState,
  on(addNewPlayerBtnClick, state => ({
    ...state,
    isLoading: true
  }))
);

export function raidviewReducer(state: RaidviewState | undefined, action: Action): any {
  return reducer(state, action);
}
