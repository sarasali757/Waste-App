import { Component } from '@angular/core';
import { AuthService } from './guards/auth.service';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Port } from './_models/port';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  port:Port=new Port();
  logOut() {
    localStorage.removeItem("jwt");
    this.port.valid=false
 }
  
}

