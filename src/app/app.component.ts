import { Component, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { ServerComponent } from './server/server.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-application';
  
//   isdisabled:boolean = false;

//  ishidden:boolean = false;
// isactive:boolean = true;
// cvar:string = 'blue';
// mystyle:object = {
//   color:'green',
//   background:'grey',
//   border: '4px solid black'
// }
// name:'xyz'
// counter: number = 0;
// increment() {
//   this.counter+=1;
// }
// decrement() {
//   this.counter-=1;
// }
// changeName(e:any) {
//   this.name = e.target.value;
// }
// city = "bangalore";
// updateCity() {
//   this.city='hebbal'
// }
// show:boolean = false;
// movies = ['RRR','BhemlaNayak','puspha']
// data=["abc","bca","ssdd"]
//  nums=[1,2,3,4,5,6,7,8,9,10];
// nums=[
//   {
//     "id":1,
//     "name":"oneplus",
//     "price": 23300,
//     "ram": "124gb"
//   },
//   {
//     "id":3,
//     "name":"oneplus1",
//     "price": 50000,
//     "ram": "128gb"
//   }
// ]
// num1: number = 4;
// num2: number = 6;
// op: string=''

name: string = "angular javascript "
salary: number = 300000;
person1 = {
  'name': "xyz",
  'age': 20,
  'salary': 250000
}
dob = new Date();
marks: number = 0.98;
company: string = "Microsoft";
// wish: string = "Hello Good Morning";
person = {
  "name": "abc",
  "age": 22,
  "gender": "male"
}
wish: string = "Good Morning";
email = "";
updateEmail(ip) {
  this.email = ip.value;
}
ctitle="parent component"

data1 ="This is demo of input decorator"
parr = [1,2,3,4,5];
cdata;
@ViewChild(ServerComponent) server
test(){
 console.log( this.server.passtoParent())
}
@ViewChild('para') p 
@ViewChildren('heading') h ;
test1(){
  console.log(this.p.nativeElement.innerText);
 for(let ele of this.h) {
  console.log(ele.nativeElement.innerText)
 }
}



 }
