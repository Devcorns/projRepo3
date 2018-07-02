import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { DirectiveComponent } from './directive/directive.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ParentchildComponent } from './parentchild/parentchild.component';

const routes: Routes = [
  {path:"dynamic",component:DynamicFormsComponent},
  {path:"directive",component:DirectiveComponent},
  {path:"viewchild",component:ViewchildComponent},
  {path:"parentchild",component:ParentchildComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
