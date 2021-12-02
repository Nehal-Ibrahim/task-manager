import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignupComponent } from './views/signup/signup.component';
import { TasksComponent } from './views/tasks/tasks.component';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'addtask',component:AddTaskComponent},
  {path:'tasks',component:TasksComponent},
  {path:'edit',component:EditTaskComponent},
  {path:'editprofile',component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
