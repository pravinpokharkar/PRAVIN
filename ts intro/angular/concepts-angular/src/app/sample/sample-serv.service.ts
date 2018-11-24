import { EventEmitter } from "events";

export class SampleServService {

  cntr: number=0;
  private em: EventEmitter <string> = new EventEmitter()
  constructor() { }


Plus(){

  return this.cntr++;
}

send(str: string){
this.em.emit(str)
}

receive( onRc : (str : string) => void ) {
  this.em.subscribe( str => onRc(str))
}
}