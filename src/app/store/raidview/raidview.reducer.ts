import {
  addNewPlayerBtnClick,
  selectNewPlayerClass,
  selectNewPlayerName,
  selectNewPlayerSpec
} from '@app/store/raidview/raidview.actions';
import { RaidviewState } from '@app/store/raidview/raidview.state';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: RaidviewState = {
  isLoading: false,
  addNewPlayer: {
    playerClass: '',
    spec: '',
    name: ''
  }
};

const reducer = createReducer(
  initialState,
  on(addNewPlayerBtnClick, state => ({
    ...state,
    addNewPlayer: {
      playerClass: '',
      spec: '',
      name: ''
    }
  })),
  on(selectNewPlayerName, (state, payload) => ({
    ...state,
    addNewPlayer: {
      ...state.addNewPlayer,
      name: payload.name
    }
  })),
  on(selectNewPlayerClass, (state, payload) => ({
    ...state,
    addNewPlayer: {
      ...state.addNewPlayer,
      playerClass: payload.playerClass,
      spec: ''
    }
  })),
  on(selectNewPlayerSpec, (state, payload) => ({
    ...state,
    addNewPlayer: {
      ...state.addNewPlayer,
      spec: payload.spec
    }
  }))
);

export function raidviewReducer(state: RaidviewState | undefined, action: Action): any {
  return reducer(state, action);
}
