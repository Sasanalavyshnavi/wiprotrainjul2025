import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlightandstrikethrudir]'
})
export class Highlightandstrikethrudir {

  constructor(private elementRef: ElementRef) {  
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.elementRef.nativeElement.style.textDecoration = 'line-through';
    this.elementRef.nativeElement.style.display = 'inline';
  }

}
