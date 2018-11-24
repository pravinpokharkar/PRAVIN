import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { DashComponent } from './dash/dash.component';
import { NavBarModule } from './nav-bar/nav-bar.module';

@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NavBarModule
  ]
})
export class DashModule { }
