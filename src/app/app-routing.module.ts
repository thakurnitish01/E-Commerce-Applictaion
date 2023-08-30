import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { ShopComponent } from './MyComponents/shop/shop.component';
import { DetailComponent } from './MyComponents/detail/detail.component';
import { CheckoutComponent } from './MyComponents/checkout/checkout.component';
import { PayComponent } from './MyComponents/pay/pay.component';
import { MyOrdersComponent } from './MyComponents/my-orders/my-orders.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { NotfoundComponent } from './MyComponents/notfound/notfound.component';
import { ProfileComponent } from './MyComponents/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: "login", component : LoginComponent},
  {path: "signup", component : SignupComponent},
  {path: "home", component : DashboardComponent},
  {path: "shop", component : ShopComponent},
  {path: "shop/:id", component : DetailComponent},
  {path: "checkout", component : CheckoutComponent},
  {path: "rozorpay", component : PayComponent},
  {path: "myOrders", component : MyOrdersComponent},
  {path: "profile", component : ProfileComponent},
  {path: "**", component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
