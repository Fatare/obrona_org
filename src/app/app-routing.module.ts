import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/auth/login/login.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { ProductCartComponent } from './views/product-cart/product-cart.component';
import { ShopCartComponent } from './views/shop-cart/shop-cart.component';


const routes: Routes = [
  
{ path: "shopCart", component: ShopCartComponent, children: [
{ path: "mainPage", component: MainPageComponent},
{ path: "productCart", component: ProductCartComponent},
]},

{ path: "Login", component: LoginComponent},
{ path: "Signup", component: SignupComponent},
{ path: "", redirectTo: "Login", pathMatch: "full"},
{ path: "**", redirectTo: "Login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
