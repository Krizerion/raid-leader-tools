import { Component, OnInit } from '@angular/core';
import { CLASS_DATA, SPEC_DATA } from '@app/raid-planner/constants/add-player.constants';
import { IconSelectionToggleEventData, PlayerStatus, SelectableIcon } from '@app/shared/models/planner.models';
import { cloneDeep } from 'lodash';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'rlt-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  public name = '';
  public selectedClass = '';
  public selectedSpec = '';
  public status: PlayerStatus = PlayerStatus.MainTeam;
  public id: string = null;
  public classIconData: SelectableIcon[] = cloneDeep(CLASS_DATA);
  public specIconData: SelectableIcon[] = [];

  constructor(private modalRef: NzModalRef) {}

  ngOnInit(): void {
    this.newNameSelected(this.name);
    if (this.selectedClass) {
      this.newClassSelected({ id: this.selectedClass, selected: true });
    }
    if (this.selectedSpec) {
      this.newSpecSelected({ id: this.selectedSpec, selected: true });
    }
  }

  newNameSelected(event: string): void {
    this.name = event;
    this.validateSelection();
  }

  newClassSelected(event: IconSelectionToggleEventData): void {
    if (event.selected) {
      this.select(this.classIconData, event);
      this.specIconData = cloneDeep(SPEC_DATA[event.id]) || [];
      this.selectedClass = event.id;
    } else {
      this.specIconData = [];
      this.selectedClass = '';
    }
    this.validateSelection();
  }

  newSpecSelected(event: IconSelectionToggleEventData): void {
    if (event.selected) {
      this.select(this.specIconData, event);
      this.selectedSpec = event.id;
    } else {
      this.selectedSpec = '';
    }
    this.validateSelection();
  }

  select(data: SelectableIcon[], event: IconSelectionToggleEventData): void {
    data.forEach(icon => (icon.selected = false));
    data.filter(icon => icon.id === event.id)[0].selected = event.selected;
  }

  validateSelection(): void {
    if (this.name.length > 0 && this.name.length <= 12 && this.selectedClass) {
      this.modalRef.updateConfig({ nzOkDisabled: false });
    } else {
      this.modalRef.updateConfig({ nzOkDisabled: true });
    }
  }
}
