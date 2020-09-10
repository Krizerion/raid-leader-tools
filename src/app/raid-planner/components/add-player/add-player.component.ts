import { Component, OnInit } from '@angular/core';
import { CLASS_DATA, SPEC_DATA } from '@app/raid-planner/constants/add-player.constants';
import { IconSelectionToggleEventData, SelectableIcon } from '@app/shared/models/planner.models';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'rv-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  public name = '';
  public note = '';
  public selectedClass = '';
  public selectedSpec = '';
  public id: number = null;
  public classIconData: SelectableIcon[] = cloneDeep(CLASS_DATA);
  public specIconData: SelectableIcon[] = [];

  constructor(private store: Store<AppState>, private modalRef: NzModalRef) {}

  ngOnInit(): void {
    // debugger;
    // console.log(this.modalRef);
    if (this.selectedClass && this.selectedSpec) {
      this.newNameSelected(this.name);
      this.newNoteSelected(this.note);
      this.newClassSelected({ id: this.selectedClass, selected: true });
      this.newSpecSelected({ id: this.selectedSpec, selected: true });
    }
  }

  newNameSelected(event: string): void {
    this.name = event;
    this.validateSelection();
  }

  newNoteSelected(event: string): void {
    this.note = event;
    this.validateSelection();
  }

  // ! TODO, BUGG!
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
    if (this.name.length > 0 && this.name.length <= 12 && this.selectedSpec && this.selectedClass) {
      this.modalRef.updateConfig({ nzOkDisabled: false });
    } else {
      this.modalRef.updateConfig({ nzOkDisabled: true });
    }
  }
}
