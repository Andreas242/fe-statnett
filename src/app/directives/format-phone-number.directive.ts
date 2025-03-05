import { Directive, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFormatPhoneNumber]'
})
export class FormatPhoneNumberDirective implements OnChanges {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
  // implement ngOnChanges
  }

  private formatPhoneNumber(): void {
    // add logic to format number here
  }
}
