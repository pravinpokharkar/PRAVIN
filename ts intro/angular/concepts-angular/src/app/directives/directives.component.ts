import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  pStl={
    border: '1px solid red'
  }
isLoggedIn= false 
  constructor() { }

  ngOnInit() {
  }

  makeLogin(usNm: string, pass:string){

this.isLoggedIn= (usNm==='codekul') && (pass==='codekul')
  }

}
