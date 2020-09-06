import {
  resetNewPlayerData,
  selectNewPlayerClass,
  selectNewPlayerName,
  selectNewPlayerSpec,
  viewPlayersData
} from '@app/store/raidview/raidview.actions';
import { RaidviewState } from '@app/store/raidview/raidview.state';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: RaidviewState = {
  isLoading: false,
  planner: {
    players: [],
    addNewPlayer: {
      playerClass: '',
      spec: '',
      name: ''
    }
  }
};

const reducer = createReducer(
  initialState,
  on(resetNewPlayerData, state => ({
    ...state,
    planner: {
      ...state.planner,
      addNewPlayer: {
        playerClass: '',
        spec: '',
        name: ''
      }
    }
  })),
  on(viewPlayersData, (state, payload) => ({
    ...state,
    planner: {
      ...state.planner,
      players: payload.players
    }
  })),
  on(selectNewPlayerName, (state, payload) => ({
    ...state,
    planner: {
      ...state.planner,
      addNewPlayer: {
        ...state.planner.addNewPlayer,
        name: payload.name
      }
    }
  })),
  on(selectNewPlayerClass, (state, payload) => ({
    ...state,
    planner: {
      ...state.planner,
      addNewPlayer: {
        ...state.planner.addNewPlayer,
        playerClass: payload.playerClass,
        spec: ''
      }
    }
  })),
  on(selectNewPlayerSpec, (state, payload) => ({
    ...state,
    planner: {
      ...state.planner,
      addNewPlayer: {
        ...state.planner.addNewPlayer,
        spec: payload.spec
      }
    }
  }))
);

export function raidviewReducer(state: RaidviewState | undefined, action: Action): any {
  return reducer(state, action);
}
