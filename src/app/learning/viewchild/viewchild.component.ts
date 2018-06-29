import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
 @ViewChild('viewChildInput')  inputElement ;
 hello:any;
  constructor() { 
    
  // setInterval(()=>{
  //   this.send2server()

  // },100)

  }
  send2server(){
  
  
  console.log(this.inputElement.nativeElement.value);
  this.hello= this.inputElement.nativeElement.value;
  
}
  ngOnInit() {
  }

}
