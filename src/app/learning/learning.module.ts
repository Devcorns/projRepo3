import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomDirective } from './custom.directive';
import { ViewchildComponent } from './viewchild/viewchild.component';

@NgModule({
  imports: [
    CommonModule,
    LearningRoutingModule
  ],
  declarations: [DynamicFormsComponent, DirectiveComponent,CustomDirective, ViewchildComponent]
})
export class LearningModule { }
