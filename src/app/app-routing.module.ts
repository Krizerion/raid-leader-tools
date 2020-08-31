import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DashboardComponent } from './dashboard/dashboard.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'planner', loadChildren: () => import('./raid-planner/raid-planner.module').then(m => m.RaidPlannerModule) },
  { path: '**', redirectTo: '/' }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
