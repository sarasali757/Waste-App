import { Component, OnInit } from '@angular/core';
import { Requests} from '../shared/new-request-detail.model'
import { HttpClient } from '@angular/common/http';

import { Port } from '../_models/port'
/*import { faCoffee } from '@fortawesome/free-solid-svg-icons';*/

import { tokenGetter } from '../app.module'
import { JwtHelperService } from '@auth0/angular-jwt';

import { RequestsDetailsService } from '../shared/requests-details.service'
@Component({
  selector: 'app-requests-details',
  templateUrl: './requests-details.component.html',
  styles: []
})
export class RequestsDetailsComponent implements OnInit {
  filter;
  p: number = 1;
  requests:Requests;
  constructor(private service: RequestsDetailsService) {
    
    service.getRequests().subscribe(  
      data => {  
        this.requests = data as Requests ;  
        console.log(this.requests)
      }  
    );;
   }

  ngOnInit(): void {
  }
  
}
