import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';
import { HttpClient } from '@angular/common/http';
//import { Requests } from './new-request-detail.model';
import { Port } from '../_models/port';


@Injectable({
  providedIn: 'root'
})
export class RequestsDetailsService {

  port:Port=new Port();
  constructor( private httpService: HttpClient ) { }

  getRequests(){
    let jwthelper = new JwtHelperService();
    let currentUser = jwthelper.decodeToken(tokenGetter());
    return this.httpService.get('http://localhost:'+ this.port.port +'/Api/client/RequestsList/'+currentUser.UserId);
  }

  getAllRequests(){
    let jwthelper = new JwtHelperService();
    let currentUser = jwthelper.decodeToken(tokenGetter());
    return this.httpService.get('http://localhost:'+ this.port.port +'/Api/client/AllRequestsList/'+currentUser.UserId);
  }
  
}
