import { Player } from '@app/shared/models/planner.models';

export interface RaidviewState {
  isLoading: boolean;
  planner: {
    players: Player[];
    addNewPlayer: {
      name: string;
      playerClass: string;
      spec: string;
    };
  };
}
