import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Port } from '../_models/port'
import { tokenGetter } from '../app.module';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  port: Port = new Port();
  clientId;
  constructor(private httpService: HttpClient) {
    let jwthelper = new JwtHelperService();
    this.clientId = jwthelper.decodeToken(tokenGetter()).UserId;
   }
  getPromotions(){
    return  this.httpService.get('http://localhost:'+this.port.port+'/Api/client/getPromotions/');
  }

  AddClientPromotion(id){
   return  this.httpService.post('http://localhost:'+this.port.port+'/Api/client/AddClientPromotion/',
    {
      "clientId": this.clientId,
      "promtionId" : id,
    },
    {headers: new HttpHeaders({ "Content-Type": "application/json; charset=utf-8"})})
    ;
  }

  GetMyPromotions(){
    return  this.httpService.get('http://localhost:'+this.port.port+'/Api/client/getMyPromotions/'+this.clientId);
  }


}
