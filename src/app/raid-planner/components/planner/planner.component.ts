import { Component, OnInit } from '@angular/core';
import { AddPlayerComponent } from '@app/raid-planner/components/add-player/add-player.component';
import { CLASSES_IMG, ROLES_IMG, SPECS_IMG } from '@app/shared/constants/classes-img-paths.constants';
import { Player } from '@app/shared/models/planner.models';
import { PlannerApiService } from '@app/shared/services/planner-api.service';
import { getRoleBySpecId } from '@app/shared/utils/class-spec-utils';
import { AppState } from '@app/store';
import { getRolesComp, newPlayerData } from '@app/store/raidview';
import { addPlayer, resetNewPlayerData, viewPlayersData } from '@app/store/raidview/raidview.actions';
import { select, Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'rv-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  public players$: Observable<Player[]> = this.plannerApiService.getPlayers();
  public newPlayerData$: Observable<any> = this.store.pipe(select(newPlayerData));
  public rolesCount$: Observable<{ [key: string]: number }> = this.store.pipe(select(getRolesComp));
  public newPlayerData: any;
  public newPlayerRole = '';
  constructor(
    private modal: NzModalService,
    private plannerApiService: PlannerApiService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.newPlayerData$.subscribe(data => {
      this.newPlayerData = data;
    });

    this.rolesCount$.subscribe(data => console.log(data));

    this.players$.subscribe(data => this.store.dispatch(viewPlayersData({ players: cloneDeep(data) })));
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
    const { name, playerClass, spec, note } = this.newPlayerData;

    const player = {
      name,
      classId: playerClass,
      specId: spec,
      roleId: getRoleBySpecId(spec),
      note
    };
    this.plannerApiService.addPlayer(player);
    this.store.dispatch(addPlayer({ player }));
  }

  handleCancel(): void {
    this.store.dispatch(resetNewPlayerData());
  }

  getClassIconById(id: string): string {
    return CLASSES_IMG[id];
  }

  getSpecIconById(id: string): string {
    return SPECS_IMG[id];
  }

  getRoleIconById(id: string): string {
    return ROLES_IMG[id];
  }
}
