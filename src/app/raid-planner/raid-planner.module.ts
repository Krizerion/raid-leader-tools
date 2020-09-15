import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddPlayerComponent } from '@app/raid-planner/components/add-player/add-player.component';
import { ClassCompositionComponent } from '@app/raid-planner/components/class-composition/class-composition.component';
import { PlannerComponent } from '@app/raid-planner/components/planner/planner.component';
import { SelectableIconGroupComponent } from '@app/raid-planner/components/selectable-icon-group/selectable-icon-group.component';
import { SelectableIconComponent } from '@app/raid-planner/components/selectable-icon/selectable-icon.component';
import { RaidPlannerRoutingModule } from '@app/raid-planner/raid-planner.routing';
import { SharedModule } from '@app/shared/shared.module';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports: [CommonModule, RaidPlannerRoutingModule, SharedModule, FormsModule, DragulaModule],
  declarations: [
    PlannerComponent,
    AddPlayerComponent,
    SelectableIconComponent,
    SelectableIconGroupComponent,
    ClassCompositionComponent
  ]
})
export class RaidPlannerModule {}
