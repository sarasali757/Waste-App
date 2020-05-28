import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
public  port:number=55915
getRegions(){
//return  this.http.get("http://localhost:5000/api/address")
}
getStreetNames(){

  //this.http.get("http://localhost:5000/api/address/2").subscribe(a=>{})
}
  constructor(/*public http:HttpClient*/) {
   // port:number=55915
   }
}
