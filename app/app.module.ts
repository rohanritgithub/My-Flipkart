import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import {ReactiveFormsModule} from '@angular/forms';
import { PipefilterPipe } from './pipe/pipefilter.pipe'
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProductsComponent,
    HeaderComponent,
    LoginComponent,
    PipefilterPipe,
    RegisterComponent,
    ForgotpwdComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
    ,AngularFireModule.initializeApp(environment.firebase),NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
