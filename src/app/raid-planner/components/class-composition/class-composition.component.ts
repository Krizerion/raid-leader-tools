import { Component, OnDestroy, OnInit } from '@angular/core';
import { CLASS_DATA } from '@app/raid-planner/constants/add-player.constants';
import { CLASSES_NAMES } from '@app/shared/constants/classes-specs-roles.constants';
import { SelectableIcon } from '@app/shared/models/planner.models';
import { PlannerApiService } from '@app/shared/services/planner-api.service';
import { getBackgroundColorByClassName } from '@app/shared/utils/class-spec-utils';
import { AppState } from '@app/store';
import { getClassComp, getRoster } from '@app/store/raidview';
import { select, Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'rv-class-composition',
  templateUrl: './class-composition.component.html',
  styleUrls: ['./class-composition.component.scss']
})
export class ClassCompositionComponent implements OnInit, OnDestroy {
  public classData: SelectableIcon[] = cloneDeep(CLASS_DATA);
  public classCount$: Observable<{ [key: string]: number }> = this.store.pipe(select(getClassComp));
  public allPlayers$: Observable<any> = this.store.pipe(select(getRoster));
  public hasDH = false;
  public hasHunter = false;
  public hasMage = false;
  public hasMonk = false;
  public hasPaladin = false;
  public hasPriest = false;
  public hasShaman = false;
  public hasWarlock = false;
  public hasWarrior = false;
  private players = [];
  private destroy$ = new Subject();

  constructor(private store: Store<AppState>, private plannerApiService: PlannerApiService) {}

  getBackgroundColor(className: string): string {
    return getBackgroundColorByClassName(className);
  }

  getClassNameById(id: string): string {
    return CLASSES_NAMES[id];
  }

  ngOnInit(): void {
    if (this.players.length === 0) {
      this.plannerApiService.getPlayers();
    }

    this.allPlayers$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.players = cloneDeep(data.players);
    });

    this.players.forEach(player => {
      if (player.classId === 'DEMON_HUNTER') {
        this.hasDH = true;
      } else if (player.classId === 'HUNTER') {
        this.hasHunter = true;
      } else if (player.classId === 'MAGE') {
        this.hasMage = true;
      } else if (player.classId === 'MONK') {
        this.hasMonk = true;
      } else if (player.classId === 'PALADIN') {
        this.hasPaladin = true;
      } else if (player.classId === 'PRIEST') {
        this.hasPriest = true;
      } else if (player.classId === 'SHAMAN') {
        this.hasShaman = true;
      } else if (player.classId === 'WARLOCK') {
        this.hasWarlock = true;
      } else if (player.classId === 'WARRIOR') {
        this.hasWarrior = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
