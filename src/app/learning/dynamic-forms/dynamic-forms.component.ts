import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormControl,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})


export class DynamicFormsComponent implements OnInit {
  dynamicform:FormGroup;
  arr=[];
  constructor(private fb:FormBuilder) { 
   this.dynamicform = this.fb.group({
    arrayContent:this.fb.array([])
   });
  }


  addIntoli(addintoli:HTMLInputElement){
     (this.dynamicform.get('arrayContent') as FormArray).push(new FormControl(addintoli.value))
  }


 formCall(){
   console.log(this.dynamicform.value)
 }
 

  ngOnInit() {
  }

}
