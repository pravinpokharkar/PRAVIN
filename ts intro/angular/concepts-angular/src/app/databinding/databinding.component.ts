import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  nm='codekul.com';
  amt=100;
  type= 'button';
  cls="btn btn-primary";
  anyThing: String; 
  constructor() { }

  ngOnInit() {
  }

  clickMe(ev:any){
    console.log('clicked');
    console.log(ev);
  }
}
