import { Component } from '@angular/core';

@Component({
    selector : 'select-left-right',
    templateUrl : './select-left-right.component.html'
})

export class SelectLeftRightComponent {
    hobbies1: any[]=["Drawing","Reading","Crafts"];
    hobbies2: any[]=["Volleyball","Badminton","Cycling"];
    hobbiesFirst: string[]=[];
    hobbiesSecond: string[]=[];
    x: string = null;
    y: string = null;
    i: any = '';

    firsthobby(){
        console.log(this.hobbiesFirst);
        if(this.hobbies2.indexOf(this.hobbiesFirst) == -1){
            this.hobbies2.push(this.hobbiesFirst);
            console.log(this.hobbies2);
            // for (this.i=0; this.i<this.hobbies1.length; this.i++){
            //     if(this.hobbies1[this.i]===this.hobbiesFirst[this.i]){
            //         this.hobbies1.splice(this.hobbiesFirst[this.i],1);
            //     }
            // }
            this.hobbies1 = this.hobbies1.filter(item => item != this.hobbiesFirst);
        }
        else{
            alert("already added");
        }
    }
    secondHobby(){
        console.log(this.hobbiesSecond);
        if(this.hobbies1.indexOf(this.hobbiesSecond) == -1){
            this.hobbies1.push(this.hobbiesSecond);
            console.log(this.hobbies1);
            this.hobbies2 = this.hobbies2.filter(item => item != this.hobbiesSecond);
        }
        else{
            alert("already added");
        }
    }
}
