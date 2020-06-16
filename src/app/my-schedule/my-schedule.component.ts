import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { ChangedEventArgs } from '@syncfusion/ej2-calendars';
import { addClass } from '@syncfusion/ej2-base';

import { NewRequestDetailService } from '../shared/new-request-detail.service';
import {RequestsDetailsService} from '../shared/requests-details.service'
import { Client } from '../_models/client.model';
import {Region} from "../_models/region.model"
import {Address} from '../_models/address.model'
import {ScheduleService} from '../shared/schedule.service'
import {Schedule} from '../_models/schedule.model'
import {Requests} from '../_models/requests.model'
import { Subject } from 'rxjs';
import { DummyRequestSharedService } from '../shared/dummy-request-shared.service';

@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.css']
})
export class MyScheduleComponent implements OnInit {
  maxMonth:number;
  minMonth:number;
  myParagraph;
  img:string="../../assets/imgs/select.jpg"
  visible:string='hidden'
  btnVisible:string='hidden'
  client: Client;
  schedules:Schedule[]=[]
  requests:Requests[]=[]
  public value: string = 'SELECT FROM THE BLUE MARKED DAYS THE SUITABLE TIMES FOR YOU THEN GO FOR IT';
  public selectedValue: Date;
  public selectedScheduleId: number;
  public minDate: Date;
  public maxDate: Date;
  // public multiselect: Boolean = true;
  constructor(private location:Location,private router:Router, private activatedRoute:ActivatedRoute,
    private requestService:NewRequestDetailService, private requestDetailsService:RequestsDetailsService,
    private scheduleService:ScheduleService,private dummyService: DummyRequestSharedService) {
   }
  
  ngOnInit(){
     this.minDate = new Date(new Date().getMonth()+1+"/"+"01/"+new Date().getFullYear())
     this.maxDate = new Date(new Date().getMonth()+1+"/"+
     new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()+"/"+new Date().getFullYear())
    //  console.log("dateee: ",new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate());
     this.minMonth = this.minDate.getMonth();
     this.maxMonth = this.maxDate.getMonth();
     this.dummyService.onMainEvent.subscribe(
      (client) => {
        
      }
   );
  }
  onLoad(args: any){
    
    this.requestService.getClient().subscribe(  
      data => {  
        this.client = data as Client ;  
        // console.log(this.client)
        this.scheduleService.getCompanyMonthSchedule(this.client.address.regionId).subscribe(  
          data => {  
            this.schedules = <Schedule[]> data ;

            this.schedules.map((item) => {
              if (args.date.getDate() === parseInt(item['time'].split('T')[0].split('-')[2]) &&
                  args.date.getMonth()+1 === parseInt(item['time'].split('T')[0].split('-')[1])) {
                  let span: HTMLElement;
                  span = document.createElement('span');
                  span.setAttribute('class', 'e-icons highlight');
                  addClass([args.element], ['special', 'e-day', 'birthday']);
                    args.element.firstElementChild.setAttribute('title', 'Choose day !');
                  args.element.setAttribute('title', ' Choose day !');
                    args.element.setAttribute('data-val', 'Choose day!');
                  args.element.appendChild(span);
              }
              // update maximum value of calendar accordnig to months in the calendar
              if(parseInt(item['time'].split('T')[0].split('-')[1]) > this.maxMonth)
              {
                this.maxMonth = parseInt(item['time'].split('T')[0].split('-')[1]);
                this.maxDate = new Date(this.maxMonth+"/"+ 
                new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()+"/"+
                new Date().getFullYear())
              }
              else if(parseInt(item['time'].split('T')[0].split('-')[1]) < (this.minMonth+1)){
                // console.log("Min Month: ",this.minMonth,": ",parseInt(item['time'].split('T')[0].split('-')[1]));
                this.minMonth = parseInt(item['time'].split('T')[0].split('-')[1]) - 1;
                this.minDate = new Date(this.minMonth+"/01/"+new Date().getFullYear())
              }
            })
          }  
        );
      }
    );  
    this.requestDetailsService.getAllRequests().subscribe((r) => {
      this.requests = <Requests[]> r;
      console.log("requests:: ",r)
      this.requests.map((item) => {
        
        if(parseInt(item['schedule']['time'].split('T')[0].split('-')[1]) > new Date().getMonth()+1)
        {
          if (args.date.getDate() === parseInt(item['schedule']['time'].split('T')[0].split('-')[2]) &&
          args.date.getMonth()+1 === parseInt(item['schedule']['time'].split('T')[0].split('-')[1])) {
              let span: HTMLElement;
                span = document.createElement('span');
                span.setAttribute('class', 'e-icons highlight myComing');
                addClass([args.element], ['special', 'e-day', 'Choose Day']);
                args.element.firstElementChild.setAttribute('title', 'Choose Day !');
                args.element.setAttribute('title', ' Choose Day !');
                args.element.setAttribute('data-val', 'Choose Day!');
                args.element.appendChild(span);
            }
        }
        else if(parseInt(item['schedule']['time'].split('T')[0].split('-')[1]) < new Date().getMonth()+1){
          if (args.date.getDate() === parseInt(item['schedule']['time'].split('T')[0].split('-')[2]) &&
          args.date.getMonth()+1 === parseInt(item['schedule']['time'].split('T')[0].split('-')[1])) {
              let span: HTMLElement;
                span = document.createElement('span');
                span.setAttribute('class', 'e-icons highlight myHistory');
                addClass([args.element], ['special', 'e-day', 'Choose Day']);
                args.element.firstElementChild.setAttribute('title', 'Choose Day !');
                args.element.setAttribute('title', ' Choose Day !');
                args.element.setAttribute('data-val', 'Choose Day!');
                args.element.appendChild(span);
            }
        }
        else{
          if(parseInt(item['schedule']['time'].split('T')[0].split('-')[2]) >= new Date().getDate())
          {
              if (args.date.getDate() === parseInt(item['schedule']['time'].split('T')[0].split('-')[2]) &&
              args.date.getMonth()+1 === parseInt(item['schedule']['time'].split('T')[0].split('-')[1])) {
                let span: HTMLElement;
                  span = document.createElement('span');
                  span.setAttribute('class', 'e-icons highlight myComing');
                  addClass([args.element], ['special', 'e-day', 'Choose Day']);
                  args.element.firstElementChild.setAttribute('title', 'Choose Day !');
                  args.element.setAttribute('title', ' Choose Day !');
                  args.element.setAttribute('data-val', 'Choose Day!');
                  args.element.appendChild(span);
              }
          }
          else if(parseInt(item['schedule']['time'].split('T')[0].split('-')[2]) < new Date().getDate()){
              if (args.date.getDate() === parseInt(item['schedule']['time'].split('T')[0].split('-')[2]) &&
              args.date.getMonth()+1 === parseInt(item['schedule']['time'].split('T')[0].split('-')[1])) {
                let span: HTMLElement;
                  span = document.createElement('span');
                  span.setAttribute('class', 'e-icons highlight myHistory');
                  addClass([args.element], ['special', 'e-day', 'Choose Day']);
                  args.element.firstElementChild.setAttribute('title', 'Choose Day !');
                  args.element.setAttribute('title', ' Choose Day !');
                  args.element.setAttribute('data-val', 'Choose Day!');
                  args.element.appendChild(span);
              }
          }
        }
        
      })
    })
  }

  NewRequestClick(){
    this.visible = 'visible'
    // console.log("value from my-schedule: ",this.value);
  }

  onValueChange(args: any) {
    //alert("change")
    //this.router.navigate(['/MySchedule'])

    this.selectedValue = args.value;
    // console.log("this.selectedValue: ",this.selectedValue.getMonth());

    this.myParagraph = document.getElementById('paragraph')
    let title: string = '';
       if(args.event){
       /*Displays selected date in the label*/
          title = args.event.currentTarget.getAttribute('data-val');
          title = title == null ? "" : " ( "+title+" )";
       }
       console.log("requests: ",this.requests)
    // document.querySelector('#time').textContent = 'Time: ' + args.value.toLocaleDateString();
    if(this.requests.length == 0)
    {
      this.startMakingRequest(args);
    }
    else{
      for (let index = 0; index < this.requests.length; index++) {
        if(args.value.getDate() === parseInt(this.requests[index]['schedule']['time'].split('T')[0].split('-')[2])
        && args.value.getMonth()+1 === parseInt(this.requests[index]['schedule']['time'].split('T')[0].split('-')[1])){
          console.log(args.value.getMonth() + "--" + new Date().getMonth());
          
          console.log("1");
          if(args.value.getMonth() > new Date().getMonth()+1){
            console.log("2");
            this.value = 'You have coming visit on this day at ' + 
            this.requests[index]['schedule']['time'].split('T')[1];
            this.btnVisible = 'hidden';
            this.myParagraph.style.color = 'palevioletred';
            // this.img = "coming"
            this.img="../../assets/imgs/coming.jpg"
          }
          else if(args.value.getMonth()+1 < new Date().getMonth()+1){
            console.log("3");
            this.value = 'You had a visit on this day at ' + 
            this.requests[index]['schedule']['time'].split('T')[1] + ', You got ' + this.requests[index]['points'] + ' points';
            this.btnVisible = 'hidden'
            this.myParagraph.style.color = 'limegreen'
            this.img="../../assets/imgs/coins.jpg"
          }
          else{
            console.log("4");
            if(args.value.getDate() > new Date().getDate()){
              console.log("5");
              this.value = 'You have coming visit on this day at ' + 
              this.requests[index]['schedule']['time'].split('T')[1];
              this.btnVisible = 'hidden'
              this.myParagraph.style.color = 'palevioletred'
              this.img="../../assets/imgs/coming.jpg"
            }
            else if(args.value.getDate() == new Date().getDate()){
              console.log("6");
              this.value = 'You have a visit today at ' + 
              this.requests[index]['schedule']['time'].split('T')[1];
              this.btnVisible = 'hidden'
              this.myParagraph.style.color = 'palevioletred'
              this.img="../../assets/imgs/coming.jpg"
            }
            else if(args.value.getDate() < new Date().getDate()){
              console.log("7");
              this.value = 'You had a visit on this day at ' + 
              this.requests[index]['schedule']['time'].split('T')[1] + ', You got ' + this.requests[index]['points'] + ' points';
              this.btnVisible = 'hidden'
              this.myParagraph.style.color = 'limegreen'
              this.img="../../assets/imgs/coins.jpg"
            }
          }
          break;
        }
        else{
          this.startMakingRequest(args);
        }
      }
    }
    
 }

 startMakingRequest(args){
   if(args.value.getMonth()+1 < new Date().getMonth()+1 || 
     (args.value.getMonth()+1 == new Date().getMonth()+1 && args.value.getDate() < new Date().getDate())){
      this.img="../../assets/imgs/alarm.jpg"
      this.value = "OOPS! ... Time's up, please choose another day."
      this.myParagraph.style.color = 'black'
      this.btnVisible = 'hidden'
     }
   else{
     this.btnVisible = 'visible'
     this.myParagraph.style.color = 'blue'
      for (let index = 0; index < this.schedules.length; index++) {
        if (args.value.getDate() === parseInt(this.schedules[index]['time'].split('T')[0].split('-')[2]) &&
            args.value.getMonth()+1 === parseInt(this.schedules[index]['time'].split('T')[0].split('-')[1])){
          document.querySelector('#time').textContent = 'Time: ' + this.schedules[index]['time'].split('T')[1];
          this.value = 'There is a visit at ' + this.schedules[index]['time'].split('T')[1];
          this.img="../../assets/imgs/select.jpg"
          //  this.selectedValue = args.value;
          this.selectedScheduleId = this.schedules[index]['id'];
          break;
        }
        else{
        document.querySelector('#time').textContent = 'Time: ' + '---';
        this.value = 'No Visit on this day, Do you like to make a special request?'
        this.img="../../assets/imgs/select.jpg"
        }
      }
    }
  }
 
}