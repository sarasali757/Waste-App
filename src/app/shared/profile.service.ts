import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  getRegion(){
    return this.httpService.get('http://localhost:'+this.port.port+'/Api/client/getRegions')
  }
  getAddresses(id){
    return this.httpService.get('http://localhost:'+this.port.port+'/Api/client/getAddresses/'+ id)
  }
  getCategories(){
    return this.httpService.get('http://localhost:'+this.port.port+'/Api/client/GetClientCategories');
  
  }

  updateClient(credentials){
    credentials.id = this.id;
    console.log(credentials.id);
    this.httpService.put('http://localhost:'+this.port.port+'/Api/client/UpdateClient', JSON.stringify(credentials),
    {headers: new HttpHeaders({ "Content-Type": "application/json; charset=utf-8"})})
    .subscribe(response => {console.log(response);},
      err => {console.log(err);}) ;   
  }
}
