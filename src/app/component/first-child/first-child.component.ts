import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  constructor() { }
  @Input()
  trainer : string = "";
  ngOnInit() {
  }

}
