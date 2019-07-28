import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductDetail } from './productdetail';
import {TrainerDetail} from './trainerdetail';
@Component({
    selector : 'detail',
    templateUrl : 'detail.component.html'
})
export class DetailComponent {

    @Input('StudentPlace')
    getTrainerdetail:TrainerDetail;
    getStudentPlace: any;
    nativePassed: string ="";
    
    userEmail : string =""; 
    panNumber : string = "";
    

    hobbiesSelected:string[]=[];
    productObj : ProductDetail = new ProductDetail();

    productSelected:string[]=[];

    @Output()
    myEvent : EventEmitter<any> = new EventEmitter();

    sendPanNumber() {
        debugger;
        this.myEvent.emit(this.panNumber);
        this.myEvent.emit("abi");
    }
    sendHobbies(){
        debugger;
        this.myEvent.emit(this.productObj.getProductsDetail[0]);   
    }
    postNative(){
        this.myEvent.emit(this.nativePassed);
    }
}  