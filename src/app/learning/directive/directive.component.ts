import { Component, OnInit,ElementRef,Input } from '@angular/core';


// import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
 
 
  constructor(
    ) { 

     
    }

  

  ngOnInit() {
  }

}


/*

No component factory found for DirectiveComponent.

because  we can not use directive in module
*/
