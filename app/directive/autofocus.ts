import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myAutofocus]'
})
export class MyAutoFocus {
  constructor(private el: ElementRef, private renderer: Renderer){}
  //Lifecycle
  ngOnInit() {
    setTimeout(_ => this.renderer.invokeElementMethod(this.el.nativeElement,'focus',[]));//Geef browser de tijd om de input te renderen.
  }
}