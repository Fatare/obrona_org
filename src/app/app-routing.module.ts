import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { PageComponent } from './views/page/page.component';

const routes: Routes = [{ path: "Login", component: LoginComponent},
{ path: "Signup", component: SignupComponent},
{ path: "landingPage", component: PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
