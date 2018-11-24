import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor() { }

  stat: boolean= false;
  prod: boolean= false;
  cust: boolean=false;
  ngOnInit() {
  }

isTrue(){
  this.stat=true;
  this.prod=false;
  this.cust=false;
}


isProd(){
  this.prod=true;
  this.stat=false;
  this.cust=false;
}

isCust(){
  this.cust=true;
  this.stat=false;
  this.prod=false;
}

}