import { Component} from '@angular/core';
@Component({
    selector : 'hobbies-select',
    templateUrl : 'multi-select.component.html'
})

export class MultiSelect{
    aaaa: any ='';
    hobbies: any ='';
    HobbiesMulti: any = '';
    inarray: any ='';
    xxxx: string[] = ["dance", "music", "sports","volleyball"]
    //hobbiesObj = new HobbiesList();
    selectedHobbies: any ='';
    showHobbies() {
        this.selectedHobbies = this.HobbiesMulti;
    }
}