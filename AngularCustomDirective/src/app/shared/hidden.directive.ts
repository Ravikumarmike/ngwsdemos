import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[myHidden]' })
export class HiddenDirective {

    constructor(private el: ElementRef,private renderer: Renderer) {}

    @Input() myHidden: boolean;

    // We have to move the implementation from the constructor to ngOnInit lifecycle method 
    // because myhidden property will be set late. 
    // ngOnInit will wait for all initialization processes to be complete before executing.
    ngOnInit(){
        // Use renderer to render the emelemt with styles
        if(this.myHidden) {
            this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        }
    }
}