import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BtCrdComponent } from './bt-crd/bt-crd.component';
import { BtJumbComponent } from './bt-jumb/bt-jumb.component';
import { BtNaviComponent } from './bt-navi/bt-navi.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { MyAlComponent } from './my-al/my-al.component';
import { ProBarComponent } from './pro-bar/pro-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BtCrdComponent,
    BtJumbComponent,
    BtNaviComponent,
    DatabindingComponent,
    MyAlComponent,
    ProBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
