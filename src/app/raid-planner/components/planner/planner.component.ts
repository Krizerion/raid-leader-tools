import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddPlayerComponent } from '@app/raid-planner/components/add-player/add-player.component';
import { CLASSES_IMG, ROLES_IMG, SPECS_IMG } from '@app/shared/constants/classes-img-paths.constants';
import { Player, PlayerStatus } from '@app/shared/models/planner.models';
import { PlannerApiService } from '@app/shared/services/planner-api.service';
import { getRoleBySpecId } from '@app/shared/utils/class-spec-utils';
import { AppState } from '@app/store';
import { getRolesComp, getRoster } from '@app/store/raid-leader-tools';
import { select, Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'rlt-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit, OnDestroy {
  public allPlayers$: Observable<any> = this.store.pipe(select(getRoster));
  public players: Player[] = [];
  public backup: Player[] = [];
  public rolesCount$: Observable<{ [key: string]: number }> = this.store.pipe(select(getRolesComp));
  public sortOptions = {
    group: 'roster',
    onEnd: (event: any) => {
      this.updatePlayerPosition(event);
    }
  };
  private destroy$ = new Subject();
  public PlayerStatus = PlayerStatus;

  public newPlayerRole = '';

  constructor(
    private modal: NzModalService,
    public plannerApiService: PlannerApiService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    if (this.players.length === 0) {
      this.plannerApiService.getPlayers();
    }

    this.allPlayers$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.players = cloneDeep(data.players);
      this.backup = cloneDeep(data.backup);
    });
  }

  updatePlayerPosition(event): void {
    const playerId = event.item.children[0].getAttribute('data-playerId');
    const target = event.to.id;

    if (target === 'delete-zone') {
      this.plannerApiService.deletePlayer(playerId);
    } else {
      this.plannerApiService.updatePlayers(this.players, this.backup);
    }
  }

  openAddNewPlayerModal(): void {
    this.modal.create({
      nzTitle: 'Add a new player',
      nzContent: AddPlayerComponent,
      nzOkDisabled: true,
      nzOnOk: this.handleOk.bind(this),
      nzOnCancel: this.handleCancel.bind(this)
    });
  }

  openEditPlayerModal(player: Player): void {
    this.modal.create({
      nzTitle: 'Edit player',
      nzContent: AddPlayerComponent,
      nzOkDisabled: true,
      nzOnOk: this.handleOkEdit.bind(this),
      nzOnCancel: this.handleCancel.bind(this),
      nzComponentParams: {
        name: player.name,
        selectedClass: player.classId,
        selectedSpec: player.specId,
        id: player.id,
        status: player.status
      }
    });
  }

  handleOk(data: AddPlayerComponent): void {
    const player: Player = {
      name: data.name,
      classId: data.selectedClass,
      specId: data.selectedSpec,
      roleId: getRoleBySpecId(data.selectedSpec),
      id: data.id,
      status: PlayerStatus.MainTeam
    };
    this.plannerApiService.addEditPlayer(player);
    // this.store.dispatch(addPlayer({ player }));
  }

  handleOkEdit(data: AddPlayerComponent): void {
    const player: Player = {
      name: data.name,
      classId: data.selectedClass,
      specId: data.selectedSpec,
      roleId: getRoleBySpecId(data.selectedSpec),
      id: data.id,
      status: data.status
    };
    // this.store.dispatch(editPlayer({ player }));
    this.plannerApiService.addEditPlayer(player);
  }

  handleCancel(): void {
    this.modal.closeAll();
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

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
