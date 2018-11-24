import { Component, OnInit } from '@angular/core';
import { SampleServService } from 'src/app/sample/sample-serv.service';

@Component({
  selector: 'app-drp',
  template: `
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
  `,
  styles: []
})
export class DrpComponent implements OnInit {

  constructor(
    private sampleServ: SampleServService
  ) { }

  ngOnInit() {
  }


  myClk(num :number){ 
    if (num===1)
this.sampleServ.send('alert alert-info')
else if (num===2)
this.sampleServ.send('alert alert-danger')
else 
this.sampleServ.send('alert alert-warning')
  }
  }
  

