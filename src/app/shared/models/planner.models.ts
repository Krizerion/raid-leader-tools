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
  name: string;
  classId: string;
  specId: string;
  roleId: string;
}
