import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-pnl',
  templateUrl: './btn-pnl.component.html',
  styleUrls: ['./btn-pnl.component.css']
})
export class BtnPnlComponent implements OnInit {

@Output()
  onBtn: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  forBtn(btn:number){
this.onBtn.emit(btn)
  }
}
