import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RegisterAsComponent} from './register-as/register-as.component'
import {RegisterAsRestrntComponent} from './register-as-restrnt/register-as-restrnt.component'
import { CustomerComponent } from './customer/customer.component';
import { TestLoginComponent } from './test-login/test-login.component';


import { RequestsDetailsComponent } from './requests-details/requests-details.component';
import { RequestComponent } from './request/request.component';


const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterAsComponent },
  {path: "register-as-apartment", component: RegisterComponent },
  {path: "test", component: TestLoginComponent },
  {path:"register-as-restrnt",component:RegisterAsRestrntComponent},
  {
    path: 'RequestsDetails',
    component: RequestsDetailsComponent,
  },
  {
    path: 'Request',
    component: RequestComponent,
  },
  { path: "", redirectTo:"Home",pathMatch:"full" },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
