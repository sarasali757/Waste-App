import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }
  canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    var token = localStorage.getItem("jwt");
 
    //&& !this.jwtHelper.isTokenExpired(token)
    if (token ){
      return true;
    }    
    console.log('hi');
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    console.log(state.url)
    return false;
  }
}
export class AuthService {

  constructor() { }
}
