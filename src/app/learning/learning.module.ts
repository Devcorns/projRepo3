import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

@NgModule({
  imports: [
    CommonModule,
    LearningRoutingModule
  ],
  declarations: [DynamicFormsComponent]
})
export class LearningModule { }
