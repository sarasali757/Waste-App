import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RegisterAsComponent} from './register-as/register-as.component'
import {RegisterAsRestrntComponent} from './register-as-restrnt/register-as-restrnt.component'
import { CustomerComponent } from './customer/customer.component';


import { RequestsDetailsComponent } from './requests-details/requests-details.component';
import { RequestComponent } from './request/request.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { MyPromotionsComponent } from './my-promotions/my-promotions.component';
import { ProfileComponent } from './profile/profile.component';
import { InputErrorsExample } from './input-errors-example/input-errors-example.component';
import { NewRequestDetailsComponent } from './request/new-request-details/new-request-details.component';
import { RequestDetialsComponent } from './request/request-detials/request-detials.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { AuthGuard }from './guards/auth.service'
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: "Home",
   component: HomeComponent,
   canActivate: [AuthGuard]
   },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterAsComponent },
  { path: "register-as-apartment", component: RegisterComponent },
  { path:"register-as-restrnt",component:RegisterAsRestrntComponent},
  {
    path: 'RequestsDetails',
    component: RequestsDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'NewRequest',
    component: NewRequestDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CurrentRequest',
    component: RequestDetialsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Promotions',
    component: PromotionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'MyPromotions',
    component: MyPromotionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Aboutus',
    component: AboutUsComponent,
  },
  {
    path: 'test',
    component: InputErrorsExample,
  },
  {
    path:"Feedback",
    component: AddFeedbackComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
