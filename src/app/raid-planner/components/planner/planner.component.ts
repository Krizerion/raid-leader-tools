import { Component, OnInit } from '@angular/core';
import { AddPlayerComponent } from '@app/raid-planner/components/add-player/add-player.component';
import { CLASSES_IMG, ROLES_IMG, SPECS_IMG } from '@app/shared/constants/classes-img-paths.constants';
import { CLASSES_NAMES } from '@app/shared/constants/classes-names.constants';
import { PlannerApiService } from '@app/shared/services/planner-api.service';
import { getRoleBySpecName } from '@app/shared/utils/class-spec-utils';
import { AppState } from '@app/store';
import { newPlayerData } from '@app/store/raidview';
import { resetNewPlayerData } from '@app/store/raidview/raidview.actions';
import { select, Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'rv-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  public players$ = this.plannerApiService.getPlayers();
  public newPlayerData$: Observable<any> = this.store.pipe(select(newPlayerData));
  public newPlayerData: any;
  public newPlayerRole = '';
  constructor(
    private modal: NzModalService,
    private plannerApiService: PlannerApiService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.newPlayerData$.subscribe(data => {
      this.newPlayerData = data;
    });
  }

  openAddNewPlayerModal(): void {
    this.store.dispatch(resetNewPlayerData());
    this.modal.create({
      nzTitle: 'Add a new player',
      nzContent: AddPlayerComponent,
      nzOkDisabled: true,
      nzOnOk: this.handleOk.bind(this),
      nzOnCancel: this.handleCancel.bind(this)
    });
  }

  handleOk(data: AddPlayerComponent): void {
    const { name, playerClass, spec } = this.newPlayerData;
    this.plannerApiService.addPlayer({
      name,
      class: CLASSES_IMG[playerClass],
      spec: SPECS_IMG[this.newPlayerData.spec],
      role: ROLES_IMG[getRoleBySpecName(spec)],
      className: CLASSES_NAMES[playerClass]
    });
  }

  handleCancel(): void {
    this.store.dispatch(resetNewPlayerData());
  }
}
