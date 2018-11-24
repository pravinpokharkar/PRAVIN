import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [HomeComponent, NavComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class NavBarModule { }
