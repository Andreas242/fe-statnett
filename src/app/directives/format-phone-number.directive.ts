import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFormatPhoneNumber]'
})
export class FormatPhoneNumberDirective implements OnChanges {

  @Input() appFormatPhoneNumber: string = ''; // Receives the dynamic data

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appFormatPhoneNumber']) {
      this.formatPhoneNumber();
    }
  }

  private formatPhoneNumber(): void {
    if (this.appFormatPhoneNumber) {
      // Remove everything after and including 'x' and replace '.' with '-'
      const formattedValue = this.appFormatPhoneNumber.split('x')[0].replace(/\./g, '-');

      // Set the formatted value back into the element
      this.renderer.setProperty(this.el.nativeElement, 'textContent', formattedValue);
    }
  }
}
