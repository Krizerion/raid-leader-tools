import { Player } from '@app/shared/models/planner.models';
import { createAction, props } from '@ngrx/store';

// TODO request, response, onok , oncancel, should be in effects probably
export const setRosterDataInStore = createAction('[Set Players Data] Set Players Data', props<{ players: Player[] }>());
export const addPlayer = createAction('[Add player to roster] Add new player success', props<{ player: Player }>());
export const editPlayer = createAction('[Edit player in roster] Edit player success', props<{ player: Player }>());
