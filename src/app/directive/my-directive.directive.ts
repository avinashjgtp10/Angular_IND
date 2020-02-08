import { Directive, ElementRef, HostListener, Input, HostBinding, Renderer } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private el: ElementRef, private render: Renderer) { }

  @Input('appMyDirective') highlightColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  } 
  @HostBinding('style.border') border: string;

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.border = '1px solid'
  }

  private highlight(color: string) {
    console.log(this.render)
    this.render.setElementStyle(this.el.nativeElement, 'color', "black");
    this.el.nativeElement.style.backgroundColor = color;
  }
}