import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomDirective } from './custom.directive';

@NgModule({
  imports: [
    CommonModule,
    LearningRoutingModule
  ],
  declarations: [DynamicFormsComponent, DirectiveComponent,CustomDirective]
})
export class LearningModule { }
