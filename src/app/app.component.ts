import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'my-first-project';
  	show:boolean = false;
  	firstName='';
  	Fname ="";
	Bday ="09/07/1993";
	ipAddress=null;
	selectedMultipleSelect: string[] = null;
	selectedComponent:string = null;
	selectedOption : string ="";
	selected:string[]=null;
	multiSelectvalue:string[]=null;
	countrySelected: string =null;
	states:string[]=['state1A','state1B','state1C','state2A','state2B','state2C','state3A','state3B'];
	state1:string[] = [];
	district1: string[]=[];
	district:string[]=['district1A','district1B','district1C','district2A','district2C','district3A','district3B','district3C'];
	stateSelect: string = null;
	districtSelect: string =null;
	angularStudent: string =null;
	hobbiesSelected: string[]=null;
	/*AA=[
		{
			states: ["states1","states2","states3"],
			district:["D1","D2","D3","D4","D5","D6"]
		},
		{
			states: ["X1","X2","X3"],
			district:["X11","X12","X13","X14"]
		},
		{
			states: ["Z1","Z2","Z3"],
			district:["Z11","Z12","Z13","Z14"]
		}
	]*/
	onClickMe(){
		console.log(this.Fname);//R.Abinaya
		var splits = this.Fname.split(".");
		/*if (splits instanceof)*/
		var substrFromtwo = this.Fname.substr(2);
		console.log("substring:", substrFromtwo);//substring:Abinaya
		console.log(splits);// ["R","abinaya"];
		var bday = this.Bday.split("/");
		console.log(bday);
	}
	onsubmitIp(){
		var ipAddressSplit = this.ipAddress.split(".");
		console.log(ipAddressSplit);
		/*console.log(typeOf(ipAddressSplit));*//*In java if it is StringArray; what is would be*/
		var ipAddressArrayLength = ipAddressSplit.length;
		console.log("Length:", ipAddressArrayLength);
		/**/
		if(ipAddressArrayLength==4){
			console.log("Entered Loop");
			for(var i = 0; i<ipAddressArrayLength; i++){
				if(i>=0 && i<=255){
					console.log("Ip address is valid");
				}
			}
		}
		else{
			console.log("Ip address is invalid");
		}
	}
	calculate(){
		this.show = true;
	}
	selectComponent(event:any){
		this.selectedOption = event.target.value;
	} 
	multiSelectChange(){
		for(var i = 0 ; i < this.multiSelectvalue.length; i++) {
			console.log(this.multiSelectvalue[i]); 
			var textX = this.multiSelectvalue[i];
			console.log(textX);
		}
	}
	countryChange(){
		//var country = this.countrySelected
		//if(this.countrySelected == "country1"){
		 //this.state1.push([AA[states[0]]]);
		//}
		var country = this.countrySelected;
		console.log(country);
		if(this.countrySelected == "country1"){
			this.state1.pop();
			for(var i=0; i<3;i++){
				
				this.state1.push(this.states[i]);
			}
		}
		if(this.countrySelected == "country2"){
			this.state1.pop();
			for(var i=4; i<6;i++){
				this.state1.push(this.states[i]);
			}
		}
		if(this.countrySelected == "country3"){
			this.state1.pop();
			for(var i=6; i<=10;i++){
				this.state1.push(this.states[i]);
			}
		}

	}
	stateChange(){
		var state = this.stateSelect;
		debugger;
		if(this.stateSelect == "state1A"){
			for(var i=0; i<3;i++){
				this.district1.push(this.district[i]);
			}
		}
		if(this.stateSelect == "state1B"){
			for(var i=4; i<6;i++){
				this.district1.push(this.district[i]);
			}
		}
		if(this.stateSelect == "state1"){
			for(var i=7; i<11;i++){
				this.district1.push(this.district[i]);
			}
		}
	}
}
