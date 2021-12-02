import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProfileComponent } from './views/profile/profile.component';
import { UserserviceService } from './services/userservice.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { TaskService } from './services/task.service';
import { EditTaskComponent } from './views/edit-task/edit-task.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AddTaskComponent,
    TasksComponent,
    EditTaskComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    AuthService,
    UserserviceService,{
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    },
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
