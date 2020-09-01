import { Component } from '@angular/core';
import { AddPlayerComponent } from '@app/raid-planner/components/add-player/add-player.component';
import { CLASSES_IMG, ROLES_IMG, SPECS_IMG } from '@app/shared/constants/classes-img-paths.constants';
import { CLASSES_NAMES } from '@app/shared/constants/classes-names.constsnts';
import { PlannerApiService } from '@app/shared/services/planner-api.service';
import { AppState } from '@app/store';
import { addNewPlayerBtnClick } from '@app/store/raidview/raidview.actions';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'rv-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent {
  public SPECS = SPECS_IMG;
  public CLASSES = CLASSES_IMG;
  public ROLES = ROLES_IMG;
  public CLASS_NAMES = CLASSES_NAMES;
  public players = [];
  public newPlayerRole = '';

  constructor(
    private modal: NzModalService,
    private plannerApiService: PlannerApiService,
    private store: Store<AppState>
  ) {
    this.players = this.plannerApiService.getPlayers();
  }

  openAddNewPlayerModal(): void {
    this.store.dispatch(addNewPlayerBtnClick());
    this.modal.create({
      nzTitle: 'This is a notification message',
      nzContent: AddPlayerComponent,
      nzOnOk: this.handleOk.bind(this),
      nzOnCancel: this.handleCancel.bind(this)
    });
  }

  handleOk(data: AddPlayerComponent): void {
    this.players.push({
      name: 'Delusion',
      class: this.CLASSES.WARLOCK,
      spec: this.SPECS.WLOCK_DESTRO,
      role: this.ROLES.RDPS,
      className: this.CLASS_NAMES.WARLOCK
    });
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
  }
}
