import { Component } from '@angular/core';
import { StudentDetail } from './studentdetail';

@Component({
    selector : 'userinput',
    templateUrl : 'userinput.component.html'
})
export class UserInputComponent {
    email : string = "";
    native: string ="";
    data : any;
    hobbies:string[]=[];
    nativePassed:string;
    getProductsDetail : string;
    getStudentPlace: StudentDetail = new StudentDetail(); 
    myMethod(e){
        this.getProductsDetail=e.id;
        this.nativePassed=e;
    }



}