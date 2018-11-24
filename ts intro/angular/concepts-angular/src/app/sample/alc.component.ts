import { Component, OnInit } from '@angular/core';
import { SampleServService } from 'src/app/sample/sample-serv.service';

@Component({
  selector: 'app-alc',
  template: `
  <div> [class]="cls" role="alert">
  alert check
  </div>



  `,
  styles: []
})
export class AlcComponent implements OnInit {

  cls: string
  constructor( private sampleServ: SampleServService) { }

  ngOnInit() {
    this.sampleServ.receive(function(str) {
        this.cls = str
    })
  }

}

