import { Player } from '@app/shared/models/planner.models';
import {
  addNewPlayerNote,
  addPlayer,
  resetNewPlayerData,
  selectNewPlayerClass,
  selectNewPlayerName,
  selectNewPlayerSpec,
  viewPlayersData
} from '@app/store/raidview/raidview.actions';
import { RaidviewState } from '@app/store/raidview/raidview.state';
import { Action, createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash';

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

export const initialState: RaidviewState = {
  isLoading: false,
  planner: {
    players: [],
    classComposition: cloneDeep(initialClassComposition),
    roleComposition: cloneDeep(initialRoleComposition),
    addNewPlayer: {
      playerClass: '',
      spec: '',
      name: '',
      note: ''
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
        name: '',
        note: ''
      }
    }
  })),
  on(viewPlayersData, (state, payload) => ({
    ...state,
    planner: {
      ...state.planner,
      classComposition: getClassComposition(payload.players),
      roleComposition: getRolesComposition(payload.players),
      players: payload.players
    }
  })),
  on(addPlayer, (state, payload) => ({
    ...state,
    planner: {
      ...state.planner,
      players: state.planner.players.concat(payload.player),
      roleComposition: getRolesComposition(state.planner.players.concat(payload.player)),
      classComposition: getClassComposition(state.planner.players.concat(payload.player))
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
  })),
  on(addNewPlayerNote, (state, payload) => ({
    ...state,
    planner: {
      ...state.planner,
      addNewPlayer: {
        ...state.planner.addNewPlayer,
        note: payload.note
      }
    }
  }))
);

function getClassComposition(players: Player[]): { [key: string]: number } {
  const comp = cloneDeep(initialClassComposition);
  players.forEach(player => comp[player.classId]++);
  return comp;
}

function getRolesComposition(players: Player[]): { [key: string]: number } {
  const comp = cloneDeep(initialRoleComposition);
  players.forEach(player => comp[player.roleId]++);
  return comp;
}

export function raidviewReducer(state: RaidviewState | undefined, action: Action): any {
  return reducer(state, action);
}
