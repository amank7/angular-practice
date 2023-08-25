import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  constructor(private elemnetref: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elemnetref.nativeElement, 'color', 'Green');
  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.renderer.setStyle(this.elemnetref.nativeElement, 'color', 'Green');
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elemnetref.nativeElement, 'color', 'blue');
  }
}
