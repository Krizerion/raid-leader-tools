import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CLASS_DATA, SPEC_DATA } from '@app/raid-planner/components/add-player/add-player.constants';
import { IconSelectionToggleEventData, SelectableIcon } from '@app/shared/models/planner.models';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'rv-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  // @Output() selectedName = new EventEmitter<string>();
  // @Output() selectedClass = new EventEmitter<string>();
  // @Output() selectedSpec = new EventEmitter<string>();
  public classIconData: SelectableIcon[] = [...CLASS_DATA];
  public specIconData: SelectableIcon[] = [];
  public name = '';
  public selectedClass = '';
  public selectedSpec = '';
  constructor(private modal: NzModalService, private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    // this.viewContainerRef.
  }

  newNameSelected(event: string): void {
    // this.selectedName.emit(event);
  }

  newClassSelected(event: IconSelectionToggleEventData): void {
    if (event.selected) {
      // this.selectedClass.emit(event.id);
      this.selectedClass = event.id;
      this.specIconData = { ...SPEC_DATA }[event.id] || [];
    } else {
      this.specIconData = [];
    }
  }

  newSpecSelected(event: IconSelectionToggleEventData): void {
    if (event.selected) {
      this.selectedSpec = event.id;
      // this.selectedClass.emit(event.id);
    }
  }
}
