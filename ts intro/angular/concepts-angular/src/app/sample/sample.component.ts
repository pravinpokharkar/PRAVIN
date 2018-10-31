import { Component, OnInit } from '@angular/core';
import { SampleServService } from './sample-serv.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  //providers: [SampleServService]
})
export class SampleComponent implements OnInit {

  cmpCntr: number= 0;
  constructor(
    private sampleServ: SampleServService 
  ) { }

  ngOnInit() {
  }


  btnClk(){
    this.cmpCntr= this.sampleServ.Plus()
  }
}
