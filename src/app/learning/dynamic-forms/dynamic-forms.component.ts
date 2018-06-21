import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormControl } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms/src/form_builder';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {
  dynamicForm:FormGroup
  constructor(private fb:FormBuilder) { 
    this.dynamicForm = this.fb.group({
      dynamicCheckbox:this.fb.array([])
    })

  }

  addCheckbox(){
    let array = this.dynamicForm.get('dynamicArr') as FormArray;
    
  }

  ngOnInit() {
  }

}
