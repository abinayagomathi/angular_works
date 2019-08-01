import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[phoneNum]'
})

export class PhoneLength{
    maxLength: number = 10;

    @HostListener('blur') onBlur(){
      
    }
    constructor() {
    }
}
