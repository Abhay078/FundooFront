import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forget',component:ForgetComponent},
  {path:'reset',component:ResetPassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
