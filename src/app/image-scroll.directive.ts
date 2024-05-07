import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImageScroll]',
})
export class ImageScrollDirective {
  @Input('appImageScroll') animationTrigger!: string;

  constructor(private el: ElementRef) {
    // Only slide-in animation
    this.el.nativeElement.style.transition = 'transform 700ms ease-out';
    this.el.nativeElement.style.transform = 'translateX(-100%)'; // Initial state
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.getBoundingClientRect().top;
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (scrollPosition >= componentPosition) {
      this.applyAnimation('show');
    } else {
      this.applyAnimation('hide');
    }
  }

  private applyAnimation(state: string) {
    const transformValue =
      state === 'show' ? 'translateX(0)' : 'translateX(-100%)';
    this.el.nativeElement.style.transform = transformValue;
  }
}
