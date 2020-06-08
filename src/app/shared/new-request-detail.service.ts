import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Router} from "@angular/router"
import { Port } from '../_models/port';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';


@Injectable({
  providedIn: 'root'
})

export class NewRequestDetailService {
  
  flag:boolean;
  port:Port=new Port();
  id;
  constructor(private httpService1: HttpClient,private router: Router) {
  
   let jwthelper = new JwtHelperService();
   this.id = jwthelper.decodeToken(tokenGetter()).UserId;

   
   this.flag = this.startNewRequest();
  }
  startNewRequest(){
    this.httpService1.get('http://localhost:'+this.port.port+'/Api/client/StartNewRequest/'+this.id).subscribe(  
      data => {  
        this.flag = data as boolean ;  
        console.log(" service flag = "+this.flag);
      }  
    );
    return this.flag;
    /* 
     if(!this.flag){
      this.router.navigate(['RequestDetails'])
    } */
  }
  
  getRequest(){
    return this.httpService1.get('http://localhost:'+this.port.port+'/Api/client/GetCurrentRequest/'+this.id)
  }
  getClient(){
    return  this.httpService1.get('http://localhost:'+this.port.port+'/Api/client/getClient/'+this.id)
  }
  getRegion(){
    return this.httpService1.get('http://localhost:'+this.port.port+'/Api/client/getRegions')
  }
  getAddresses(id){
    return this.httpService1.get('http://localhost:'+this.port.port+'/Api/client/getAddresses/'+ id)
  }
  getSchedules(id){
    return this.httpService1.get('http://localhost:'+this.port.port+'/Api/client/getSchedules/'+ id)
  }
  postNewRequestDetails(credentials){
    credentials.clientId = this.id;
    console.log(credentials.clientId);
   return this.httpService1.post('http://localhost:'+this.port.port+'/Api/client/AddNewRequest'
   , JSON.stringify(credentials), 
    {headers: new HttpHeaders({ "Content-Type": "application/json; charset=utf-8"})})
      
  }
  DeleteRequest(id){
    this.httpService1.delete('http://localhost:'+this.port.port+'/Api/client/DeleteRequest/'+id)
    .subscribe(response => {console.log(response);},
      err => {console.log(err);}) ; 
  }

}
