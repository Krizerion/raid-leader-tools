import { Player } from '@app/shared/models/planner.models';
import { createAction, props } from '@ngrx/store';

// TODO request, response, onok , oncancel, should be in effects probably
export const viewPlayersData = createAction('[View Players] View Players Data', props<{ players: Player[] }>());
export const addPlayer = createAction('[Add player to roster] Add new player success', props<{ player: Player }>());

export const resetNewPlayerData = createAction('[Add player to roster] Click add player button');

export const selectNewPlayerName = createAction(
  '[Add player to roster] Choose new player name',
  props<{ name: string }>()
);

export const selectNewPlayerClass = createAction(
  '[Add player to roster] Choose new player class',
  props<{ playerClass: string }>()
);

export const selectNewPlayerSpec = createAction(
  '[Add player to roster] Choose new player spec',
  props<{ spec: string }>()
);
