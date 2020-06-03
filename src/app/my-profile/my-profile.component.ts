import { Component, OnInit } from '@angular/core';
import { Client } from '../_models/client.model';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  client: Client;

  constructor(private service:ProfileService) {
    service.getClientData().subscribe(data=>{
      this.client = data as Client;
    },err => {console.log(err);})
   }

  ngOnInit(): void {
  }
  clicked(){
    console.log("dddd")
  }

}
