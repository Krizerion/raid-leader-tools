import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconSelectionToggleEventData, SelectableIcon } from '@app/shared/models/planner.models';

@Component({
  selector: 'rv-selectable-icon-group',
  templateUrl: './selectable-icon-group.component.html',
  styleUrls: ['./selectable-icon-group.component.scss']
})
export class SelectableIconGroupComponent {
  @Input() iconData: SelectableIcon[] = [];
  @Input() allowMultipleSelection = false;
  @Output() iconSelected = new EventEmitter<IconSelectionToggleEventData>();

  toggleItemsSelection(event: IconSelectionToggleEventData): void {
    if (!this.allowMultipleSelection) {
      this.iconData.map(icon => (icon.selected = false));
    }
    this.iconData.filter(icon => icon.id === event.id)[0].selected = event.selected;
    this.iconSelected.emit(event);
  }
}
