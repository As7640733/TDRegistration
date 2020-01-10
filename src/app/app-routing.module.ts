import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { BusinessComponent } from './register/business/business.component';
import { AddressComponent } from './register/address/address.component';
import { WorkComponent } from './register/work/work.component';
import { PersonalComponent } from './register/personal/personal.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, children: [
    {path: '', redirectTo: 'personal', pathMatch:'full'},
    { path: 'personal',  component: PersonalComponent },
    { path: 'work',  component: WorkComponent },
    { path: 'address',  component: AddressComponent },
    { path: 'business',  component: BusinessComponent }
  ]},
  {path: 'onboarding', component: OnboardingComponent},

  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
