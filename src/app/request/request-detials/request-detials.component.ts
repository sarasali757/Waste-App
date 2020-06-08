import { Component, OnInit } from '@angular/core';
//import { Requests } from '../../shared/new-request-detail.model';
import { NewRequestDetailService } from 'src/app/shared/new-request-detail.service';

import { ConfirmDialogBoxComponent } from 'src/app/confirm-dialog-box/confirm-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { NotifyDialogBoxComponent } from 'src/app/notify-dialog-box/notify-dialog-box.component';

import {Requests} from '../../_models/requests.model' 
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-request-detials',
  templateUrl: './request-detials.component.html',
  styles: []
})
export class RequestDetialsComponent implements OnInit {

  request:Requests;
  remainingTime;
  remainingTimeString;
  hours;
  minutes;
  seconds;
  date;
  constructor(private service:NewRequestDetailService,private dialog:MatDialog,private router:Router) { 
  }

  ngOnInit(): void {
    this.getRequest();
  }
  getRequest(){
    this.service.getRequest().subscribe(  
      data => {  
        this.request = data as Requests ;  
        this.remainingTime = (new Date(this.request.schedule.time)).valueOf()-(new Date()).valueOf();
       
        setInterval(() => {
          this.remainingTime = (new Date(this.request.schedule.time)).valueOf()-(new Date()).valueOf();
           this.getRemainingTime()
        }, 1000)
      },err=>{
        setTimeout(() => this.router.url,10000); 
        this.getRequest();
      }
      );
  }
   getRemainingTime(){
    //Get hours from milliseconds
    var hours = this.remainingTime / (1000*60*60);
    var absoluteHours = Math.floor(hours);
    var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;
  
    //Get remainder from hours and convert to minutes
    var minutes = (hours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(minutes);
    var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;
  
    //Get remainder from minutes and convert to seconds
    var seconds = (minutes - absoluteMinutes) * 60;
    var absoluteSeconds = Math.floor(seconds);
    var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;
  
    this.remainingTimeString = h + ':' + m + ':' + s
    return this.remainingTimeString ;
  }

  DeleteRequest(){
    this.service.DeleteRequest(this.request.id);
  }
  openDialog(){
    let Message = "Are you Sure You Want To Delete \n Current Request"
    this.dialog.open(ConfirmDialogBoxComponent,{ data: Message})
    .afterClosed()
    .subscribe(result=> 
      {  
        if(result == true){
          this.DeleteRequest()
          this.openNotifyDialogBox("Deleted Successfully");
          this.router.navigate(['/Home'])
        }
      });
  }
  openNotifyDialogBox(message){
    this.dialog.open(NotifyDialogBoxComponent,{ data: message})
  }
}

