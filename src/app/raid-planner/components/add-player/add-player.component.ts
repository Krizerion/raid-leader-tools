import { Component, OnInit } from '@angular/core';
import { CLASS_DATA, SPEC_DATA } from '@app/raid-planner/components/add-player/add-player.constants';
import { IconSelectionToggleEventData, SelectableIcon } from '@app/shared/models/planner.models';
import { AppState } from '@app/store';
import { newPlayerData } from '@app/store/raidview';
import { selectNewPlayerClass, selectNewPlayerName, selectNewPlayerSpec } from '@app/store/raidview/raidview.actions';
import { select, Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'rv-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  public name = '';
  public classIconData: SelectableIcon[] = cloneDeep(CLASS_DATA);
  public specIconData: SelectableIcon[] = [];
  public newPlayerData$: Observable<any> = this.store.pipe(select(newPlayerData));

  constructor(private store: Store<AppState>, private modalRef: NzModalRef) {}

  ngOnInit() {
    this.newPlayerData$.subscribe(data => {
      if (data.name.length > 0 && data.name.length <= 12 && data.playerClass && data.spec) {
        this.modalRef.updateConfig({ nzOkDisabled: false });
      } else {
        this.modalRef.updateConfig({ nzOkDisabled: true });
      }
    });
  }

  newNameSelected(event: string): void {
    this.store.dispatch(selectNewPlayerName({ name: event }));
  }

  newClassSelected(event: IconSelectionToggleEventData): void {
    if (event.selected) {
      this.store.dispatch(selectNewPlayerClass({ playerClass: event.id }));
      this.specIconData = cloneDeep(SPEC_DATA[event.id]) || [];
    } else {
      this.store.dispatch(selectNewPlayerClass({ playerClass: '' }));
      this.specIconData = [];
    }
  }

  newSpecSelected(event: IconSelectionToggleEventData): void {
    if (event.selected) {
      this.store.dispatch(selectNewPlayerSpec({ spec: event.id }));
    } else {
      this.store.dispatch(selectNewPlayerSpec({ spec: '' }));
    }
  }
}
