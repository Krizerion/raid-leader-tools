export interface SelectableIcon {
  url: string;
  selected: boolean;
  id: string;
  tooltipText: string;
}

export interface IconSelectionToggleEventData {
  id: string;
  selected: boolean;
}

export interface Player {
  id?: string;
  name: string;
  classId: string;
  specId: string;
  roleId: string;
  note?: string;
  status?: PlayerStatus;
}

export enum PlayerStatus {
  MainTeam = 'MainTeam',
  Bench = 'Bench'
}
export interface ClassUtilitiesData {
  utilities: {
    immunities: number;
    battleRes: boolean;
  };
  buffs: {
    stamina: boolean;
    attackPower: boolean;
    intellect: boolean;
    haste: boolean;
  };
  debuffs: {
    physical: boolean;
    magic: boolean;
    haste: boolean;
  };
}
