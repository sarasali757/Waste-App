import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  IsLoggedIn(){
    console.log("Auth service");
    let token = localStorage.getItem("jwt");
    console.log(token);
    if(!token){
      return false
    }
    else{
      return true;
    }
  }
}
