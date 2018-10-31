import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  //nm='codekul.com';
  amt=100;
  type= 'button';
  cls="btn btn-primary";
  anyThing: String; 
  constructor() { }
  nm: number=0;
  nmPer: any;

  ngOnInit() {
  }
 



  clickMe(nm){
    if (nm===1){
    this.nm+=10;
    this.nmPer= `${this.nm}%`
    console.log(this.nmPer);
    }
    else{
    this.nm-=10; 
    this.nmPer= `${this.nm}%`
    console.log(this.nmPer);
    }
  }

  
}

