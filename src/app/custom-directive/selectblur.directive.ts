import { Directive, ElementRef, HostListener,Input, Host } from '@angular/core';

@Directive({
    selector: '[selectBlur]'
})

export class SelectBlur{
    secondSelect: any = '';
    selecttwo: HTMLElement;
    constructor(private element:ElementRef){
        
    }
    @HostListener('blur') blurDisplay(){
        this.selecttwo = document.getElementById('years') as HTMLElement;
        this.selecttwo.style.display="block";
    }
}