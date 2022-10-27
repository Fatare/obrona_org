import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { CartComponent } from './views/cart/cart.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { ProductCartComponent } from './views/product-cart/product-cart.component';
import { ShopCartComponent } from './views/shop-cart/shop-cart.component';

const routes: Routes = [{ path: "Login", component: LoginComponent},
{ path: "Signup", component: SignupComponent},
{ path: "shopCart", component: ShopCartComponent},
{ path: "mainPage", component: MainPageComponent},
{ path: "productCart", component: ProductCartComponent},
{ path: "cart", component: CartComponent},
{ path: "header", component: HeaderComponent},
{ path: "footer", component: FooterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
