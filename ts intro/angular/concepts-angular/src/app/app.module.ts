import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { BtCrdComponent } from './bt-crd/bt-crd.component';
import { BtJumbComponent } from './bt-jumb/bt-jumb.component';
import { BtNaviComponent } from './bt-navi/bt-navi.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { MyAlComponent } from './my-al/my-al.component';
import { ProBarComponent } from './pro-bar/pro-bar.component';
import { BtnPnlComponent } from './btn-pnl/btn-pnl.component';
import { IntrComComponent } from './intr-com/intr-com.component';
import { DirectivesComponent } from './directives/directives.component';

import { Sample1Directive } from './directives/sample1.directive';
import { SampleComponent } from './sample/sample.component';
import { SampleServService } from 'src/app/sample/sample-serv.service';
import { AlcComponent } from './sample/alc.component';
import { DrpComponent } from './sample/drp.component';

@NgModule({
  declarations: [
    AppComponent,
    BtCrdComponent,
    BtJumbComponent,
    BtNaviComponent,
    DatabindingComponent,
    MyAlComponent,
    ProBarComponent,
    BtnPnlComponent,
    IntrComComponent,
    DirectivesComponent,

    Sample1Directive,

    SampleComponent,

    AlcComponent,

    DrpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [SampleServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
