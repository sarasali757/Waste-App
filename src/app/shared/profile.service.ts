import { Injectable, EventEmitter } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Port } from '../_models/port';
import { Client } from '../_models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  id;
  port: Port = new Port();
  onMainEvent: EventEmitter<Client> = new EventEmitter();
 
  constructor(private httpService: HttpClient) { }

  getId(): boolean{
    let jwthelper = new JwtHelperService();
    if(tokenGetter()){
      this.id = jwthelper.decodeToken(tokenGetter()).UserId;
      return true;
    }
    else{
      return false;
    }
  }
  getClientData(){
    if( this.getId()){
      console.log(this.getId) ;
    return this.httpService.get('http://localhost:'+this.port.port+'/Api/client/getClientData/'+this.id);
    }
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
    if(this.getId()){
    credentials.id = this.id;
    console.log(credentials.id);
   return this.httpService.put('http://localhost:'+this.port.port+'/Api/client/UpdateClient', JSON.stringify(credentials),
    {headers: new HttpHeaders({ "Content-Type": "application/json; charset=utf-8"})})
     
    }
  }
}
