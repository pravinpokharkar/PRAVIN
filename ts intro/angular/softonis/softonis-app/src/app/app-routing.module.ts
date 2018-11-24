import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './dash/nav-bar/nav/nav.component';
import { DashComponent } from './dash/dash/dash.component';

const routes: Routes = [
  {path: 'main', component: NavComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
