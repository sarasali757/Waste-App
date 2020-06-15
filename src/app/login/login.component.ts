import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/guards/auth.service';
import{TestService} from 'src/app/guards/test.service'
import * as myGlobals from 'src/app/guards/test.service'
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Port } from '../_models/port';
import { ProfileService } from '../shared/profile.service';
import { tokenGetter } from '../app.module';
import { MatDialog } from '@angular/material/dialog';
import { NotifyDialogBoxComponent } from '../notify-dialog-box/notify-dialog-box.component';
import { Client } from '../_models/client.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validLogin: boolean;
 // global:TestService=new TestService()
   token:string;
   port:Port=new Port()

  onMain: boolean = false;

  constructor(public http:HttpClient ,public router:Router,public testser:TestService ,
    private route: ActivatedRoute, private service: ProfileService,private dialog:MatDialog) {}
    login(form: NgForm)
     {
      if(tokenGetter()){
        localStorage.removeItem("jwt");
      }
      let credentials = JSON.stringify(form.value);
      this.http.post("http://localhost:"+this.port.port+"/api/auth/login" ,  credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
      }).subscribe(
        response => {
          this.token = (<any>response).token;
          localStorage.setItem("jwt", this.token);
          this.validLogin = true;
        //  this.testser.setValidValue(true);
        // console.log(this.testser.valid)

          console.log(response);
          let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Home';
          //this.router.navigate([ returnUrl || '/Home' ]); 

          this.router.navigateByUrl(returnUrl);

          this.service.getClientData().subscribe(client=>{
            this.updateOnMain(client) ;
          })


      }, err => {
      // this.invalidLogin = true;
      console.log(err);
      let message ="Invalid login"
      this.dialog.open(NotifyDialogBoxComponent,{  width: '250px', data: message})
      //alert("Invalid login");
      });

     /*    let token = localStorage.getItem("jwt");
        this.http.get("http://localhost:"+this.port.port+"/api/customer", {//for points api
          headers: new HttpHeaders({
        // "Authorization":"Bearer "+this.token,
            "Content-Type": "application/json"
          })
        }).subscribe(response => {
          console.log(response)
          
   // location.reload();
          this.router.navigateByUrl("/Home"); //go here for profile or main page
        }, err => {
          console.log(err)
    }); */
    // this.http.get("http://localhost:"+this.port.port+"/api/address").subscribe(a=>console.log(a))
    // console.log("hello");
  }
  updateOnMain(onMain):void {
    this.service.onMainEvent.emit(onMain);
    console.log(onMain);
  } 

 getData(){
  // return this.http.get("http://localhost:5000/api/customer",{
  //   headers: new HttpHeaders({
  //     "Authorization":"Bearer "+this.token
 // }) 
//})
 }
  ngOnInit(): void {
   // this.testser.valid=true;
   // console.log("init",this.testser.getValidValue)
  }

}

// http://localhost:5000/api/auth/login