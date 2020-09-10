import { addPlayer, editPlayer, setRosterDataInStore } from '@app/store/raidview/raidview.actions';
import { RaidviewState } from '@app/store/raidview/raidview.state';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: RaidviewState = {
  isLoading: false,
  planner: {
    players: []
  }
};

const reducer = createReducer(
  initialState,
  on(setRosterDataInStore, (state, payload) => ({
    ...state,
    planner: {
      ...state.planner,
      players: payload.players
    }
  })),
  on(addPlayer, (state, payload) => {
    return {
      ...state,
      planner: {
        ...state.planner,
        players: state.planner.players.concat(payload.player)
      }
    };
  }),
  on(editPlayer, (state, payload) => {
    return {
      ...state,
      planner: {
        ...state.planner,
        players: state.planner.players.map(player => (player.id === payload.player.id ? payload.player : player))
      }
    };
  })
);

export function raidviewReducer(state: RaidviewState | undefined, action: Action): any {
  return reducer(state, action);
}
