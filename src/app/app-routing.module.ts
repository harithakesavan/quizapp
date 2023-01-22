import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'welcome',component:WelcomeComponent},
  {path:'question',component:QuestionComponent},
  {path:'addquestion',component:AddquestionComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
