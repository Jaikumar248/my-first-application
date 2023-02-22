import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'  
})
export class ServerComponent{
  @Input() childtitle:string;
  @Input() d1: string;
  @Input() d2;

  @Output() customevent = new EventEmitter();

  message="passed to parent"
  passToParent(){
    this.customevent.emit(this.message);
  }
  updatemessage(e) {
    this.message=e.target.value;
  }
  data = "This is demo of component communication "
  
  data1 = "This is the demo of veiw child "

  passtoParent() {
    return this.data1;
  }
}
