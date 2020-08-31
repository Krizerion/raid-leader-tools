import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from '@app/about/about.component';
import { DashboardComponent } from '@app/dashboard/dashboard.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'planner', loadChildren: () => import('./raid-planner/raid-planner.module').then(m => m.RaidPlannerModule) },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/' }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
