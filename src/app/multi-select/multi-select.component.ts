import { Component} from '@angular/core';
import {HobbiesList} from './hobbies-list';
@Component({
    selector : 'hobbies-select',
    templateUrl : 'multi-select.component.html'
})

export class MultiSelect{
    aaaa: any ='';
    hobbies: any ='';
    HobbiesMulti: any = '';
    inarray: any ='';
    xxxx:any ="";
    //xxxx: string[] = ["dance", "music", "sports","volleyball"];

    constructor(private a : HobbiesList) {

    }

    gethobb(){
        this.xxxx = this.a.getHobbiesList;
        
    }
    eachHobby: any ='';
    selectedHobbiesarray = [];
    selectedHobbies: any ='';
    indexOfselected: any ='';
    qq: any ='';
    showHobbies() {
        debugger;
        //this.selectedHobbies = this.selectedHobbies+""+this.HobbiesMulti;
        this.selectedHobbiesarray.push(this.HobbiesMulti);
        console.log(this.selectedHobbiesarray);
        this.xxxx.splice(this.HobbiesMulti, 1)
        console.log(this.xxxx);

    }
}