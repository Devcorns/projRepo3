import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: "home", component: HomeComponent},
    {path:"auth", loadChildren:"./auth/auth.module#AuthModule"},
    {path:"admin", loadChildren:"./admin/admin.module#AdminModule"},
    {path:"user", loadChildren:"./user/user.module#UserModule"}, 
    {path:"visitor", loadChildren:"./visitor/visitor.module#VisitorModule"} ,
    {path:"learning", loadChildren:"./learning/learning.module#LearningModule"} 
    
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}