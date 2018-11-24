import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders/orders.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,

  ],
  declarations: [DashComponent, LeftMenuComponent, ContentContainerComponent, NavBarComponent ]
})
export class DashModule { }
