import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormControl,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {
  dynamicform:FormGroup;
  constructor(private fb:FormBuilder) { 
   this.dynamicform = this.fb.group({
    'arrayContent':new FormArray([])
   });

  }

  addControl() {
   
  }

 

  ngOnInit() {
  }

}
