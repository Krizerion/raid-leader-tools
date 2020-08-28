// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '/planner',
//     loadChildren: () => import('./raid-planner/raid-planner.module').then(m => m.RaidPlannerModule)
//   },

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PlannerComponent } from './raid-planner/components/planner/planner.component';

const routes: Routes = [
  { path: 'planner', loadChildren: () => import('./raid-planner/raid-planner.module').then(m => m.RaidPlannerModule) },
  { path: '**', redirectTo: '/' }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
