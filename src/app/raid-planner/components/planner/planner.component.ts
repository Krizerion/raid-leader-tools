import { Component } from '@angular/core';
import { AddPlayerComponent } from '@app/raid-planner/components/add-player/add-player.component';
import { CLASSES_IMG, ROLES_IMG, SPECS_IMG } from '@app/shared/constants/classes-img-paths.constants';
import { CLASSES_NAMES } from '@app/shared/constants/classes-names.constants';
import { PlannerApiService } from '@app/shared/services/planner-api.service';
import { getRoleBySpecName } from '@app/shared/utils/class-spec-utils';
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

  constructor(private modal: NzModalService, private plannerApiService: PlannerApiService) {
    this.players = this.plannerApiService.getPlayers();
  }

  openAddNewPlayerModal(): void {
    this.modal.create({
      nzTitle: 'Add a new player',
      nzContent: AddPlayerComponent,
      nzOnOk: this.handleOk.bind(this),
      nzOnCancel: this.handleCancel.bind(this)
    });
  }

  handleOk(data: AddPlayerComponent): void {
    this.players.push({
      name: data.name,
      class: this.CLASSES[data.selectedClass],
      spec: this.SPECS[data.selectedSpec],
      role: this.ROLES[getRoleBySpecName(data.selectedSpec)],
      className: this.CLASS_NAMES[data.selectedClass]
    });
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
  }
}
