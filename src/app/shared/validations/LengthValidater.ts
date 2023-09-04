import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LengthValidater]'
})
export class LengthValidater {
  constructor(private el: ElementRef) { }

  @Input() LengthValidater : any;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    //console.log(event.target.value.length);
    if (event.target.value.length == this.LengthValidater) {
      // Allow backspace(8) and tab key(9)
      if(e.keyCode != 8 && e.keyCode != 9){
        e.preventDefault();
      }
    }
  }
}