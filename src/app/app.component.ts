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
import * as signalR from "@aspnet/signalr";
import { DummyNotificationService } from './shared/dummy-notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'demo1';
  port:Port=new Port();
  showFiller = false;
   private hubConnection: signalR.HubConnection;
  nick = '';
  message = '';
  points='';
  messages: string[] = [];
  onMain: boolean = false;

  constructor(private service: ProfileService,private dummyService : DummyNotificationService){
  }
  ngOnInit(): void {
    this.dummyService.onMainEvent.subscribe(
      (onMain) => {
        this.onMain = onMain;
        console.log(onMain);
      });
     //this.test();
     console.log("OK Started")
     this.hubConnection = new signalR.HubConnectionBuilder()
     .withUrl('http://localhost:50856/charthub'
     , {
       skipNegotiation: true,
       transport: signalR.HttpTransportType.WebSockets
     })
      .build();
      this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));
      this.hubConnection.serverTimeoutInMilliseconds = 2000000

      this.hubConnection.on('MessageReceived', (nick: string, receivedMessage: string,points:string) =>
      {
      const text = `${nick}: ${receivedMessage}:${points} points`;
      this.messages.push(text);
      this.dummyService.onMainEvent.emit(this.messages);/* emit message */
    });
      
  }

  test(){
    setTimeout(() => {this.messages.push("hi"); console.log("send")
    this.dummyService.onMainEvent.emit(this.messages);
    this.test();
  },100); 
  }
}

