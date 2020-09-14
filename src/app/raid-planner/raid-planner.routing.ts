import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlannerComponent } from '@app/raid-planner/components/planner/planner.component';

const routes: Routes = [{ path: '', component: PlannerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaidPlannerRoutingModule {}
