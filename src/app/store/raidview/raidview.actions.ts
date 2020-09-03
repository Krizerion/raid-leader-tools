import { createAction, props } from '@ngrx/store';

export const addNewPlayerBtnClick = createAction('[Add player to roster] Click add player button');

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
