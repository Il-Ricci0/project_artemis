import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutes } from './modules/dashboard/dashboard.routes';

const routes: Routes = [
  ...DashboardRoutes,
  {
    path:'', redirectTo:'dashboard', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
