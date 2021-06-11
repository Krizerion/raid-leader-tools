import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconSelectionToggleEventData } from '@app/shared/models/planner.models';

@Component({
  selector: 'rlt-selectable-icon',
  templateUrl: './selectable-icon.component.html',
  styleUrls: ['./selectable-icon.component.scss']
})
export class SelectableIconComponent {
  @Input() isSelected = false;
  @Input() iconUrl: string;
  @Input() id = '0';
  @Input() tooltipText = '';
  @Output() iconSelected = new EventEmitter<IconSelectionToggleEventData>();

  toggleSelection(): void {
    this.iconSelected.emit({ id: this.id, selected: !this.isSelected });
  }
}
