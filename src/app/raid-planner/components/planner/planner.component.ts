import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddPlayerComponent } from '@app/raid-planner/components/add-player/add-player.component';
import { CLASSES_IMG, ROLES_IMG, SPECS_IMG } from '@app/shared/constants/classes-img-paths.constants';
import { Player } from '@app/shared/models/planner.models';
import { PlannerApiService } from '@app/shared/services/planner-api.service';
import { getRoleBySpecId } from '@app/shared/utils/class-spec-utils';
import { AppState } from '@app/store';
import { getRolesComp, getRoster } from '@app/store/raid-leader-tools';
import { addPlayer, editPlayer, setRosterDataInStore } from '@app/store/raid-leader-tools/raid-leader-tools.actions';
import { select, Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DragulaService } from 'ng2-dragula';
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

  // public playersWithoutSelectedSpec$: Observable<number> = this.store.pipe(select(playersWithoutSelectedSpec));
  private destroy$ = new Subject();

  public newPlayerRole = '';

  constructor(
    private modal: NzModalService,
    private plannerApiService: PlannerApiService,
    private store: Store<AppState>,
    private dragulaService: DragulaService
  ) {
    this.dragulaService.createGroup('roster', {
      revertOnSpill: true,
      direction: 'horizontal'
    });

    this.dragulaService
      .dropModel('roster')
      .pipe(takeUntil(this.destroy$))
      .subscribe(args => {
        if (args.source.id === 'backup-roster' && args.target.id === args.source.id) {
          setTimeout(() => {
            this.store.dispatch(
              setRosterDataInStore({ backup: cloneDeep(args.sourceModel), players: cloneDeep(this.players) })
            );
          });
        } else if (args.source.id === 'main-roster' && args.target.id === args.source.id) {
          setTimeout(() => {
            this.store.dispatch(
              setRosterDataInStore({ backup: cloneDeep(this.backup), players: cloneDeep(args.sourceModel) })
            );
          });
        } else if (args.source.id === 'backup-roster' && args.target.id === 'main-roster') {
          setTimeout(() => {
            this.store.dispatch(
              setRosterDataInStore({ backup: cloneDeep(args.sourceModel), players: cloneDeep(args.targetModel) })
            );
          });
        } else if (args.source.id === 'main-roster' && args.target.id === 'backup-roster') {
          setTimeout(() => {
            this.store.dispatch(
              setRosterDataInStore({ backup: cloneDeep(args.targetModel), players: cloneDeep(args.sourceModel) })
            );
          });
        }
      });
  }

  ngOnInit(): void {
    if (this.players.length === 0) {
      this.plannerApiService.getPlayers();
    }

    this.allPlayers$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.players = cloneDeep(data.players);
      this.backup = cloneDeep(data.backup);
    });
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
        note: player.note,
        id: player.id
      }
    });
  }

  handleOk(data: AddPlayerComponent): void {
    const player = {
      name: data.name,
      classId: data.selectedClass,
      specId: data.selectedSpec,
      roleId: getRoleBySpecId(data.selectedSpec),
      note: data.note,
      id: data.id
    };
    // this.plannerApiService.addPlayer(player);
    this.store.dispatch(addPlayer({ player }));
  }

  handleOkEdit(data: AddPlayerComponent): void {
    const player = {
      name: data.name,
      classId: data.selectedClass,
      specId: data.selectedSpec,
      roleId: getRoleBySpecId(data.selectedSpec),
      note: data.note,
      id: data.id
    };
    this.store.dispatch(editPlayer({ player }));
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
    this.dragulaService.destroy('roster');
  }
}
