import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  //class.open is boostatp class for opening the group button
  @HostBinding("class.open") isOpen = false;
  // @HostListener("click") toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
  @HostListener("document:click", ["$event"]) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
