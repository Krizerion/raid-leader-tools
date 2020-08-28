import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './components/planner/planner.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: PlannerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaidPlannerRoutingModule {}
