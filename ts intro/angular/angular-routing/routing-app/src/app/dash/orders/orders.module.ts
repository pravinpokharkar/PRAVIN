import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class OrdersModule { }
