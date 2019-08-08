import {Component} from '@angular/core';
import {MyService} from './service-one';
@Component({
    selector: 'services-first',
    templateUrl: './services-first-component.html'
})

export class ServicesFirstComponent{
    cityName: String='';
    cities = [];
    submitCity(){
        this.cities.push(this.cityName);
        console.log(this.cities);
        
    }
    constructor(private a : MyService) {
        
    }
}