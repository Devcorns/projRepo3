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
    'arrayContent':this.fb.array([this.addData()])
   });

  }

 dataItem():any{
    this.fb.group({
     name:new FormControl('')
   });
 }
 addData() {
  const control: FormArray = this.dynamicform.get(`arrayContent`) as FormArray;
  control.push(this.dataItem());
}

 formCall(){
   console.log(this.dynamicform.value)
 }
 

  ngOnInit() {
  }

}
