import { Component, OnInit } from '@angular/core';

window['check()'] = function(){
  alert("hello");
}
@Component({
  selector: 'app-menu-practice',
  templateUrl: './menu-practice.component.html',
  styleUrls: ['./menu-practice.component.css']
})
export class MenuPracticeComponent implements OnInit  {
  appendString:any = "<a onclick='check()'>Header component</a>";
  constructor() { }
  appended: any="";
 
  // check(){
  //   alert('hello');
  // }
  ngOnInit() {
    
  }
} 