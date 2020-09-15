import { CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AddPlayerComponent } from '@app/raid-planner/components/add-player/add-player.component';
import { CLASSES_IMG, ROLES_IMG, SPECS_IMG } from '@app/shared/constants/classes-img-paths.constants';
import { Classes, Roles, Specs } from '@app/shared/constants/classes-specs-roles.constants';
import { Player } from '@app/shared/models/planner.models';
import { PlannerApiService } from '@app/shared/services/planner-api.service';
import { getRoleBySpecId } from '@app/shared/utils/class-spec-utils';
import { AppState } from '@app/store';
import { getRolesComp, getRoster } from '@app/store/raidview';
import { addPlayer, editPlayer } from '@app/store/raidview/raidview.actions';
import { select, Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DragulaService } from 'ng2-dragula';
import { Observable } from 'rxjs';

@Component({
  selector: 'rv-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  public players$: Observable<Player[]> = this.store.pipe(select(getRoster));
  public players: Player[] = [
    {
      id: 1,
      name: 'Racor',
      classId: Classes.WARLOCK,
      specId: Specs.WLOCK_AFF,
      roleId: Roles.RDPS
    },
    {
      id: 2,
      name: 'Verkow',
      classId: Classes.PALADIN,
      specId: Specs.PALA_PROT,
      roleId: Roles.TANK
    },
    {
      id: 3,
      name: 'Lyandria',
      classId: Classes.SHAMAN,
      specId: Specs.SHAM_RESTO,
      roleId: Roles.HEALER
    },
    {
      id: 4,
      name: 'Silent',
      classId: Classes.ROGUE,
      specId: Specs.ROGUE_ASSA,
      roleId: Roles.MDPS
    }
  ];
  public backup: Player[] = [
    {
      id: 22,
      name: 'Rockish',
      classId: Classes.DEATH_KNIGHT,
      specId: Specs.DK_BLOOD,
      roleId: Roles.TANK
    },
    {
      id: 23,
      name: 'Wshh',
      classId: Classes.MONK,
      specId: Specs.MONK_WIND,
      roleId: Roles.MDPS
    },
    {
      id: 24,
      name: 'Slavi',
      classId: Classes.PALADIN,
      specId: Specs.PALA_HOLY,
      roleId: Roles.HEALER
    }
  ];
  public rolesCount$: Observable<{ [key: string]: number }> = this.store.pipe(select(getRolesComp));

  public newPlayerRole = '';

  @ViewChild(CdkDropListGroup) listGroup: CdkDropListGroup<CdkDropList>;
  @ViewChild(CdkDropList) placeholder: CdkDropList;

  vamps = [{ name: 'Bad Vamp' }, { name: 'Petrovitch ' }, { name: 'Bob ' }, { name: 'Reaper' }];

  vamps2 = [{ name: 'Dracula' }, { name: 'Kurz' }, { name: 'Vladislav' }, { name: 'Deacon' }];

  public target: CdkDropList;
  public targetIndex: number;
  public source: CdkDropList;
  public sourceIndex: number;
  public dragIndex: number;
  public activeContainer: CdkDropList<any>;

  constructor(
    private modal: NzModalService,
    private plannerApiService: PlannerApiService,
    private store: Store<AppState>,
    private viewportRuler: ViewportRuler,
    private dragulaService: DragulaService
  ) {
    this.target = null;
    this.source = null;

    // this.players$.subscribe(data => {
    //   this.players = cloneDeep(data);
    // });

    this.dragulaService.createGroup('VAMPIRES', {});

    this.dragulaService.drag('VAMPIRES').subscribe(args => {
      console.log('====== DRAG START ======');
      console.log(args);
      console.log('====== DRAG END ======');
    });

    this.dragulaService.dropModel('VAMPIRES').subscribe(args => {
      // if (args.targetModel.length > 5) {
      //   if (args.targetIndex === 5) {
      //   }
      //   const targetItem = args.targetModel[args.targetIndex + 1];
      //   args.targetModel.splice(args.targetIndex + 1, 1);
      //   args.sourceModel.splice(args.sourceIndex, 0, targetItem);
      // }
      console.log('====== DROP MODEL START ======');
      console.log(args);
      console.log('====== DROP MODEL END ======');
    });
  }

  ngOnInit(): void {
    // if (this.players.length === 0) {
    //   this.plannerApiService.getPlayers();
    // }
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

  drop(event: CdkDragDrop<any>) {
    debugger;
    this.players[event.previousContainer.data.index] = event.container.data.item;
    this.players[event.container.data.index] = event.previousContainer.data.item;
  }
  // dragMoved(e: CdkDragMove): any {
  //   const point = this.getPointerPositionOnPage(e.event);

  //   this.listGroup._items.forEach(dropList => {
  //     if (this.__isInsideDropListClientRect(dropList, point.x, point.y)) {
  //       this.activeContainer = dropList;
  //       return;
  //     }
  //   });
  // }

  // dropListDropped(event): any {
  //   if (!this.target) {
  //     return;
  //   }

  //   const phElement = this.placeholder.element.nativeElement;
  //   const parent = phElement.parentElement;

  //   phElement.style.display = 'none';

  //   parent.removeChild(phElement);
  //   parent.appendChild(phElement);
  //   parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

  //   this.target = null;
  //   this.source = null;

  //   if (this.sourceIndex !== this.targetIndex) {
  //     moveItemInArray(this.players, this.sourceIndex, this.targetIndex);
  //     this.store.dispatch(setRosterDataInStore({ players: cloneDeep(this.players) }));
  //   }
  // }

  // dropListEnterPredicate = (drag: CdkDrag, drop: CdkDropList) => {
  //   if (drop === this.placeholder) {
  //     return true;
  //   }

  //   if (drop !== this.activeContainer) {
  //     return false;
  //   }

  //   const phElement = this.placeholder.element.nativeElement;
  //   const sourceElement = drag.dropContainer.element.nativeElement;
  //   const dropElement = drop.element.nativeElement;

  //   const dragIndex = this.__indexOf(dropElement.parentElement.children, this.source ? phElement : sourceElement);
  //   const dropIndex = this.__indexOf(dropElement.parentElement.children, dropElement);

  //   if (!this.source) {
  //     this.sourceIndex = dragIndex;
  //     this.source = drag.dropContainer;

  //     phElement.style.width = sourceElement.clientWidth + 'px';
  //     phElement.style.height = sourceElement.clientHeight + 'px';
  //     phElement.style.background = sourceElement.style.background;

  //     sourceElement.parentElement.removeChild(sourceElement);
  //   }

  //   this.targetIndex = dropIndex;
  //   this.target = drop;

  //   phElement.style.display = '';
  //   phElement.style.border = '1px dashed black';
  //   dropElement.parentElement.insertBefore(phElement, dropIndex > dragIndex ? dropElement.nextSibling : dropElement);

  //   // This was here from the example, doesnt work, so I commented it
  //   // this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
  //   return false;
  // };

  // /** Determines the point of the page that was touched by the user. */
  // getPointerPositionOnPage(event: MouseEvent | TouchEvent): any {
  //   // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
  //   const point = this.__isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
  //   const scrollPosition = this.viewportRuler.getViewportScrollPosition();

  //   return {
  //     x: point.pageX - scrollPosition.left,
  //     y: point.pageY - scrollPosition.top
  //   };
  // }

  // __indexOf(collection, node): any {
  //   return Array.prototype.indexOf.call(collection, node);
  // }

  // /** Determines whether an event is a touch event. */
  // __isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
  //   return event.type.startsWith('touch');
  // }

  // __isInsideDropListClientRect(dropList: CdkDropList, x: number, y: number): any {
  //   const { top, bottom, left, right } = dropList.element.nativeElement.getBoundingClientRect();
  //   return y >= top && y <= bottom && x >= left && x <= right;
  // }
}
