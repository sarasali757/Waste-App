import { Component, OnInit } from '@angular/core';
import { AuthService } from './guards/auth.service';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Port } from './_models/port';
import { tokenGetter } from './app.module';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProfileService } from './shared/profile.service';
import { Client } from './_models/client.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'demo1';
  port:Port=new Port();
  showFiller = false;
   
  constructor(private service: ProfileService){
  }
  ngOnInit(): void {
     
  }
 

}

