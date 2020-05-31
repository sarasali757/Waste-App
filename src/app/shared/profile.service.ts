import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { Port } from '../_models/port';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  id;
  port: Port = new Port();

  constructor(private httpService: HttpClient) {
   let jwthelper = new JwtHelperService();
   this.id = jwthelper.decodeToken(tokenGetter()).UserId;
   }

  getClientData(){
    return this.httpService.get('http://localhost:'+this.port.port+'/Api/client/getClientData/'+this.id);
  }
}
