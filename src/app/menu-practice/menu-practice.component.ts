import { Component } from '@angular/core';
window["check"] = function(){
  alert("hello");
}
@Component({
  selector: 'app-menu-practice',
  templateUrl: './menu-practice.component.html',
  styleUrls: ['./menu-practice.component.css']
})
export class MenuPracticeComponent  {
  appendString:any = "<div (click)='check()'><ul class='left-li'><li>1</li><li>2</li></ul></div><div><ul><li>1a</li><li>1b</li><li>1c</li></ul></div>";
  constructor() { }
  appended: any="";
 
  check(){
    alert('hello');
  }
} 