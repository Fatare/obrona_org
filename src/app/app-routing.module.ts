import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { SignupComponent } from './views/auth/signup/signup.component';

const routes: Routes = [{ path: "Login", component: LoginComponent},
{ path: "Signup", component: SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
