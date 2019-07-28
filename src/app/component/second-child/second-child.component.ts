import {Component, OnInit, Input} from '@angular/core';
@Component({
    selector:'second-child',
    templateUrl: './second-child.component.html',
    styleUrls:['./second-child.component.css']
})
export class SecondChildComponent implements OnInit{
    constructor(){}
    @Input()
    hobbiesShown:string[]= [];
    ngOnInit(){

    }
}