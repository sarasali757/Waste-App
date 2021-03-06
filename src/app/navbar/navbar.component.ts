import { Component, OnInit } from '@angular/core';
import { tokenGetter } from '../app.module';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Port } from '../_models/port';
import { ProfileService } from '../shared/profile.service';
import { Client } from '../_models/client.model';
import { Router } from '@angular/router';
import { DummyNotificationService } from '../shared/dummy-notification.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  port: Port = new Port();
  showFiller = false;
  client: Client;
  clicked = false;

  numOfMessage: number = 0 ;
  messages: string[] = [];

  constructor(private service:ProfileService,private router: Router,private dummyService:DummyNotificationService) {
  }
  getClient(){
    if(tokenGetter()){
      this.service.getClientData().subscribe(data=>{
        this.client = data as Client;
      },err=>{
        setTimeout(() => this.router.url,250); 
        this.getClient();
      })
     }
  }

  getClientChange(){
    this.getClient();
    
    this.service.onMainEvent.subscribe(
      (client) => {
        this.client = client;
      },err=>{
        setTimeout(() => this.router.url,250); 
        this.getClientChange();
      }
   );
  }
  ngOnInit(): void {
    this.getClient();
    this.getClientChange();
    this.dummyService.onMainEvent.subscribe(
      (messages) => {
        this.messages =messages;
        this.numOfMessage = this.messages.length;
      },err=>{
      }
   );
  }

  logOut() {
    localStorage.removeItem("jwt");
    this.port.valid=false
  }

  IsLoggedIn(){
    let jwtHelper = new JwtHelperService();
    let token = tokenGetter();

    if(!token){
      return false
    }
    return true;
  }
  Clicked(){
    console.log("clicked")
    this.clicked = !this.clicked;
  }
 
}
