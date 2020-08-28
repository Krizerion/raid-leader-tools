import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './components/planner/planner.component';
import { RaidPlannerRoutingModule } from './raid-planner.routing';

@NgModule({
  imports: [CommonModule, RaidPlannerRoutingModule],
  declarations: [PlannerComponent]
})
export class RaidPlannerModule {}
