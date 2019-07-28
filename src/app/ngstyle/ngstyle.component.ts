import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent  {
  constructor() { }
  getColor(country){
    if (country == 'US'){
      return 'blue';
    }
    if (country == 'UK'){
      return 'green';
    }
  }
  people:any[] = [
    {
      'name':'Douglas',
      'country':'US'
    },
    {
      'name':'Loreum',
      'country':'UK'
    }
  ]

}
