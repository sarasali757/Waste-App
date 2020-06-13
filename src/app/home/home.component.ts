import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Port } from '../_models/port';
import { Instructions } from '../_models/Instructions.model';
import { Promotion } from '../_models/promotion.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  port: Port = new Port();
  instructions : Instructions[];
  count:Array<string> = new Array();
  bind: boolean = false;

  promotions;
  countPromotion:Array<string> = new Array();
  bindPromotions: boolean;
  constructor(private jwtHelper: JwtHelperService, private router: Router,private http: HttpClient) {}

  isUserAuthenticated() {
    
    let token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
  isLoggedIn(){
    let token: string = localStorage.getItem("jwt");
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }
  ngOnInit(): void {
    this.http.get('http://localhost:'+this.port.port+'/Api/Instructions/GetInstructions/').subscribe(data=>{
      this.instructions = data as Instructions [];
      console.log(this.instructions)
      
      for(let i=1;i<this.instructions.length;i++){
        this.count.push(i.toString());
        console.log(this.count);
      }
      this.bind = true;
    })

    console.log( " After Promotion");

    this.http.get('http://localhost:'+this.port.port+'/Api/Admin/GetPromotionsImage/').subscribe(data=>{   
     
      this.promotions = data;
      console.log("Promotion",this.promotions)

      for(let i=1;i<this.promotions.length;i++){
        this.countPromotion.push(i.toString());
        console.log(this.countPromotion);
      }
      this.bindPromotions = true;
    });

  }

  public createImgPath = (image:string) => {
    return "http://localhost:" +this.port.port+"/Resources/Images/"+image;
  }

}
