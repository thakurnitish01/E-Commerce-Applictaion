import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { ShopComponent } from './MyComponents/shop/shop.component';
import { HttpClientModule} from '@angular/common/http';
import { DetailComponent } from './MyComponents/detail/detail.component';
import { CheckoutComponent } from './MyComponents/checkout/checkout.component'
import { FormsModule } from '@angular/forms';
import { PayComponent } from './MyComponents/pay/pay.component';
import { MyOrdersComponent } from './MyComponents/my-orders/my-orders.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {MatIconModule} from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NotfoundComponent } from './MyComponents/notfound/notfound.component';
import { ProfileComponent } from './MyComponents/profile/profile.component';
// import { NgxDocViewerModule } from 'ngx-doc-viewer'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ShopComponent,
    DetailComponent,
    CheckoutComponent,
    PayComponent,
    MyOrdersComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,MatIconModule,
    MatStepperModule,MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule,MatCardModule,MatFormFieldModule,
    MatInputModule,ReactiveFormsModule,
    AppRoutingModule,FormsModule,
    BrowserAnimationsModule,AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [PayComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
