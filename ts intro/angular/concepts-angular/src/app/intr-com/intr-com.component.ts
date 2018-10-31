import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intr-com',
  templateUrl: './intr-com.component.html',
  styleUrls: ['./intr-com.component.css']
})
export class IntrComComponent implements OnInit {

  prg: number= 0;
 prgStr: String;

  constructor() { }

  ngOnInit() {
  }

  onBtnClicked(btn:number){
if (btn===1){
this.prgStr= `${this.prg+=10}%`
console.log(this.prgStr)
}

else {
  this.prgStr= `${this.prg-=10}%`
console.log(this.prgStr)
}

  }

}
