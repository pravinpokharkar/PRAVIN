import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bt-crd',
  templateUrl: './bt-crd.component.html',
  styleUrls: ['./bt-crd.component.css']
})
export class BtCrdComponent implements OnInit {

  @Input()
  crd:Crd;
  constructor() { }

  ngOnInit() {
  }

}

class Crd{
  imgUrl: string;
  ttl: string;
  msg: string;
}