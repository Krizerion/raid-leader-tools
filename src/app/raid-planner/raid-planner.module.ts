import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidPlannerRoutingModule } from '@app/raid-planner/raid-planner.routing';
import { PlannerComponent } from '@app/raid-planner/components/planner/planner.component';
import { SharedModule } from '@app/shared/shared.module';
import { AddPlayerComponent } from '@app/raid-planner/components/add-player/add-player.component';

@NgModule({
  imports: [CommonModule, RaidPlannerRoutingModule, SharedModule],
  declarations: [PlannerComponent, AddPlayerComponent]
})
export class RaidPlannerModule {}
