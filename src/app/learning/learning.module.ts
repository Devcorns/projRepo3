import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomDirective } from './custom.directive';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ParentchildComponent } from './parentchild/parentchild.component';

@NgModule({
  imports: [
    CommonModule,
    LearningRoutingModule
  ],
  declarations: [DynamicFormsComponent, DirectiveComponent,CustomDirective, ViewchildComponent, ParentchildComponent]
})
export class LearningModule { }
