import {Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
    selector:'[mybgcolor]'
})
export class MyBgColorDirective {

    constructor(private element:ElementRef){
        element.nativeElement.style.backgroundColor='blue';
        element.nativeElement.style.padding='30px';
    }
    @HostListener('mouseenter') onMyMouseEnter(){
        this.changeBGColor('red');
    }
    @HostListener('mouseleave') onMyMouseLeave(){
        this.changeBGColor('green');
    }
    changeBGColor(color){
        this.element.nativeElement.style.backgroundColor = color;
    }
}