import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/profile.service';
import { Client } from '../_models/client.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  client;
  constructor(private service:ProfileService) 
  {
    service.getClientData().subscribe(data =>{
      this.client = data as Client
      console.log(this.client);
    });
  }

  ngOnInit(): void {

  }

}
