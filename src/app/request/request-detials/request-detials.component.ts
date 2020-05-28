import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requests } from '../../shared/new-request-detail.model';
import { NewRequestDetailService } from 'src/app/shared/new-request-detail.service';

@Component({
  selector: 'app-request-detials',
  templateUrl: './request-detials.component.html',
  styles: []
})
export class RequestDetialsComponent implements OnInit {

  request:Requests;
  remainingTime;
  hours;
  minutes;
  seconds;
  constructor(private service:NewRequestDetailService) { 
    this.getRequest();
  }

  ngOnInit(): void {
  }
  getRequest(){
    this.service.getRequest().subscribe(  
      data => {  
        this.request = data as Requests ;  
        console.log(this.request)
        console.log(this.request.schedule.date)      
        this.remainingTime = (new Date(this.request.schedule.date)).valueOf()-(new Date()).valueOf();
        console.log("time "+this.remainingTime);
        console.log(this.getRemainingTime());
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
  
    return h + ':' + m + ':' + s;
  }

  DeleteRequest(){
    this.service.DeleteRequest(this.request.id);
  }
}

