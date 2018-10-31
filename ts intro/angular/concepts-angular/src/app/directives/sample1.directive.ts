import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSample1]'
})
export class Sample1Directive {

  @Input('appSample1')
  @HostBinding('style.width')
  wd: string;

  constructor() { }

  @HostBinding('style.zoom')
  zm: string;
 

  @HostListener('mouseenter')
  inBx(){
    this.wd= '600px';
   // this.zm= true;
  }

  @HostListener('mouseleave')
  outBx(){
    this.wd= '300px';
    //this.zm= false;
  
  }
}
