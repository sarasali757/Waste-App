import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Client} from 'src/app/client'
import { TestService } from '../guards/test.service';
import { Region } from '../_models/region';
import {Port} from '../_models/port'
import { Address } from '../_models/address';
import { Category } from '../_models/category';
import { ClientCategory } from '../_models/client-category';
import { Address2 } from '../_models/address2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  token:string;
newClient:Client=new Client();
streets:string[]=[];
region:Region[]; port:Port=new Port()
address: Address2[]=[];
category:ClientCategory[]=[];
  constructor(public http:HttpClient ,public router:Router,public s:TestService) { }
  Register(){
  //get addressId
  // this.http.get<number>("http://localhost:55915/api/address/GetAddressId?rId="+this.address.regionId+"&stN="+this.address.streetName)
  // .subscribe(a=>{
  //  // console.log("addid",a)
  //   this.newClient.AddressId=a
  
  // })
   this.Register2();
  }
  Register2(){
    console.log("before send",this.newClient)
    this.http.post("http://localhost:"+this.port.port+"/api/client/RegistrationAprtmnt" ,this.newClient).subscribe(a=>{console.log(a)
    console.log("hi")
    this.router.navigateByUrl("/login"); })

  }
  getStreets(r:number){
    console.log("id is "+r)
    this.http.get<Address2[]>("http://localhost:"+this.port.port+"/api/address/GetAddress?id="+r).subscribe(a=>{this.address=a;
  console.log(a)})
    
  }
setCategory(c:number){
  console.log(c)
 this.newClient.CategoryId=c;
}
  getOnLoad(){
      this.http.get<Region[]>("http://localhost:"+this.port.port+"/api/address/GetRegion").subscribe(a=>{this.region=a
    console.log(a)})
  //  this.newClient.streetName="45"
     console.log("hello")
this.http.get<ClientCategory[]>("http://localhost:"+this.port.port+"/api/client/GetCategory").subscribe(a=>{
  console.log(a)
this.category=a})
     console.log("array of regions is",this.region)

  }

  ngOnInit(): void {
    this.getOnLoad();
  }

}
