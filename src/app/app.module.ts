import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PersonalComponent } from './register/personal/personal.component';
import { WorkComponent } from './register/work/work.component';
import { AddressComponent } from './register/address/address.component';
import { BusinessComponent } from './register/business/business.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './register/navbar/navbar.component';
import { api } from './services/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OnboardingComponent,
    HomeComponent,
    ErrorComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    BusinessComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [api],
  bootstrap: [AppComponent]
})
export class AppModule { }
