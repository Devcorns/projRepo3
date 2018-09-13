import { Component, OnInit } from '@angular/core';
import { SettingSenderService } from "./setting-sender.service";
import { FormGroup, FormControl, Validators, FormBuilder,FormArray }  from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers:[SettingSenderService]
})
export class SettingsComponent implements OnInit {
  issueForm:FormGroup;
  issueSelectedForm:FormGroup;
  issueCheckBox=[];
  issueVal=[];
  
 
  constructor(private settingService:SettingSenderService,public fb:FormBuilder) {
    this.issueForm = this.fb.group({
      issueType : new FormControl("",Validators.required)
      
    });
    this.issueSelectedForm = this.fb.group({
      issueTypes: this.fb.array([])
  });
   
  
   }


  

  ngOnInit() {
    
    this.settingService.showIssues().subscribe(result => {

      for (var i = 0; i < result.length; i++) {
          if (result[i].issueType != undefined) {
              this.addIssueType(result[i]);
              //console.log(result[i]);
              //this.issueCheckBox.push(result[i].issueType);
          }

      }
      //console.log(this.issueCheckBox);
  });
  }

  holu(id){
    console.log(id);
  }

addIssueType(val) {
  
   (this.issueSelectedForm.get('issueTypes') as FormArray).controls.push(new FormControl(val));
  // array.push(new FormControl(val));

  //this.issueTyp
  console.log( val )
}


  issueEntry(data){

    this.settingService.saveIssueEntry(data).subscribe(result=>{

      console.log(result);

    },err=>{
      console.log(err);
    })
    
  }
  selectIssue(data){
    console.log(data);
  }

}
