import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() color: string= 'red';

  constructor(
    private element: ElementRef,
    private render: Renderer2,
  ) { 
    console.log(this.element.nativeElement);

  }

  ngOnInit(): void{
    this.element.nativeElement.style.backgroundColor = this.color;

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#fff'
    );
    }

  @HostListener('mouseleave') onMouseLeave(){
    this.render.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color
    );

  }
}


