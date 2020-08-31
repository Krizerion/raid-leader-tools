import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidPlannerRoutingModule } from '@app/raid-planner/raid-planner.routing';
import { PlannerComponent } from '@app/raid-planner/components/planner/planner.component';

@NgModule({
  imports: [CommonModule, RaidPlannerRoutingModule],
  declarations: [PlannerComponent]
})
export class RaidPlannerModule {}
