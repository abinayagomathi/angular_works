import { Component} from '@angular/core';
import {HobbiesList} from './hobbies-list';
@Component({
    selector : 'hobbies-select',
    templateUrl : 'multi-select.component.html'
})

export class MultiSelect{
    aaaa: any ='';
    hobbies: any ='';
    HobbiesMulti: string[] = [];
    inarray: any ='';
    xxxx : string[] =[];
    //xxxx: string[] = ["dance", "music", "sports","volleyball"];

    constructor(private a : HobbiesList) {

    }

    gethobb(){
        this.xxxx = this.a.getHobbiesList;
        console.log(this.xxxx);
        return this.xxxx;
        
    }
    eachHobby: any ='';
    selectedHobbiesarray: any[] =[];
    selectedHobbies: any ='';
    indexOfselected: any ='';
    qq: any ='';
    i: any ='';
    showHobbies() {
        console.log("what i am selecting:" + this.HobbiesMulti);// first array selecting values
        //this.selectedHobbies = this.selectedHobbies+""+this.HobbiesMulti;
        if(this.selectedHobbiesarray.indexOf(this.HobbiesMulti)== -1){ 
            // if selected element is not present in the second array; push it.
            this.selectedHobbiesarray.push(this.HobbiesMulti);
        }
        console.log(this.selectedHobbiesarray);
        this.indexOfselected = this.xxxx.indexOf(this.HobbiesMulti[this.i]);
        console.log(this.indexOfselected);
        for(this.i = this.xxxx.length - 1; this.i >= 0; this.i--){
            if(this.xxxx[this.i] === this.HobbiesMulti[this.i]){
                this.xxxx.splice(this.i,1);
                console.log(this.xxxx);
            }
        }
    }
}