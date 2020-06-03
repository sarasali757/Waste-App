import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { JwtModule } from "@auth0/angular-jwt";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { AuthService } from './guards/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { RegisterAsComponent } from './register-as/register-as.component';
import { RegisterAsRestrntComponent } from './register-as-restrnt/register-as-restrnt.component';

//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RequestsDetailsComponent } from './requests-details/requests-details.component';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module

import { NewRequestDetailService } from './shared/new-request-detail.service';
import { RequestComponent } from './request/request.component';
import { RequestDetialsComponent } from './request/request-detials/request-detials.component';
import { NewRequestDetailsComponent } from './request/new-request-details/new-request-details.component';
import { PromotionsComponent } from './promotions/promotions.component';
//import { PromotionDetailsComponent } from './promotion-details/promotion-details.component';

//popup

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { RequestsDetailsService } from './shared/requests-details.service';
import { PromotionService } from './shared/promotion.service';
import { ConfirmDialogBoxComponent } from './confirm-dialog-box/confirm-dialog-box.component';
import { NotifyDialogBoxComponent } from './notify-dialog-box/notify-dialog-box.component';
import { MyPromotionsComponent } from './my-promotions/my-promotions.component';
import { ProfileComponent } from './profile/profile.component';

import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';
import { InputErrorsExample } from './input-errors-example/input-errors-example.component';


//

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {CdkDetailRowDirective} from './promotions/cdk-detail-row.directive';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavbarComponent } from './navbar/navbar.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  
  entryComponents: [PromotionsComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CustomerComponent,
    RegisterAsComponent,
    RegisterAsRestrntComponent,

    RequestsDetailsComponent, 
    RequestComponent,
    RequestDetialsComponent,
    NewRequestDetailsComponent,
    PromotionsComponent,
   // PromotionDetailsComponent,
    
    ConfirmDialogBoxComponent,
    NotifyDialogBoxComponent,
    MyPromotionsComponent,
    ProfileComponent,
    InputErrorsExample,
    CdkDetailRowDirective,
    MyProfileComponent,
    NavbarComponent
  ],
  imports: [MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    // RouterModule.forRoot([
    //    { path: '', component: HomeComponent },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'customers', component: RegisterComponent },
    // ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:55915"],
        blacklistedRoutes: []
      }
    }),

   NgxPaginationModule,
   Ng2SearchPipeModule ,
   MatDialogModule,
   MatTableModule,
   MatFormFieldModule,
   MatInputModule,
   MatPaginatorModule,
   MatSelectModule,
   MatButtonModule,
   ReactiveFormsModule,
   MatIconModule,
   MatTooltipModule,
   MatSidenavModule,
   MatProgressSpinnerModule,

  ],
  providers: [AuthService
  ,
  NewRequestDetailService
  ,
  RequestsDetailsService
  ,
  PromotionService
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
