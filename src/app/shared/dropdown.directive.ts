import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[vfDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') public isOpen = false;
  @HostListener('click') public onClick() {
    console.log('dropdown click')
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
