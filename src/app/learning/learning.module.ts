import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { LearningRoutingModule } from './learning-routing.module';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomDirective } from './custom.directive';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ParentchildComponent } from './parentchild/parentchild.component';
import { PaytmComponent } from './paytm/paytm.component';

@NgModule({
  imports: [
    CommonModule,
    LearningRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DynamicFormsComponent, DirectiveComponent,CustomDirective, ViewchildComponent, ParentchildComponent, PaytmComponent]
})
export class LearningModule { }
