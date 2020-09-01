import { Component } from '@angular/core';
import { CLASS_DATA, SPEC_DATA } from '@app/raid-planner/components/add-player/add-player.constants';
import { IconSelectionToggleEventData, SelectableIcon } from '@app/shared/models/planner.models';
import { AppState } from '@app/store';
import { selectNewPlayerClass, selectNewPlayerName, selectNewPlayerSpec } from '@app/store/raidview/raidview.actions';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'rv-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {
  public name = '';
  public classIconData: SelectableIcon[] = [...CLASS_DATA];
  public specIconData: SelectableIcon[] = [];

  constructor(private store: Store<AppState>) {}

  newNameSelected(event: string): void {
    this.store.dispatch(selectNewPlayerName({ name: event }));
  }

  newClassSelected(event: IconSelectionToggleEventData): void {
    if (event.selected) {
      this.store.dispatch(selectNewPlayerClass({ playerClass: event.id }));
      this.specIconData = cloneDeep(SPEC_DATA[event.id]) || [];
    } else {
      this.specIconData = [];
    }
  }

  newSpecSelected(event: IconSelectionToggleEventData): void {
    if (event.selected) {
      this.store.dispatch(selectNewPlayerSpec({ spec: event.id }));
    }
  }
}
