import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { ShowlistComponent } from './showlist/showlist.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {path:"add",component:AddComponent},
  {path:"login",component:LoginComponent},
  {path:"showlist",component:ShowlistComponent},
 
  {path:"",component:HomeComponent},
  {path:"course",component:CourseComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
