import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;
    // constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        // this.renderer.setAttribute(this.elementRef, 'class', 'open');
    }
}