import { Component, OnInit } from '@angular/core';
import { NewRequestDetailService } from '../../shared/new-request-detail.service';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
//import { NewRequestClientModel, NewRequestRegionModel, NewRequestAddressModel ,NewRequestScheduleModel} from '../../shared/new-request-detail.model';
import {Client} from '../../_models/client.model'
import {Region} from "../../_models/region.model"
import {Address} from '../../_models/address.model'
import {Schedule} from '../../_models/schedule.model'
import { NotifyDialogBoxComponent } from 'src/app/notify-dialog-box/notify-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { RequestDetialsComponent} from '../request-detials/request-detials.component'
import {} from '../../requests-details/requests-details.component'
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/shared/profile.service';
import { tokenGetter } from 'src/app/app.module';
import { MatTabChangeEvent } from '@angular/material/tabs';
import {} from '../../my-schedule/my-schedule.component'
@Component({
  selector: 'app-new-request-details',
  templateUrl: './new-request-details.component.html',
  styleUrls: ['./new-request-details.component.css']
})

export class NewRequestDetailsComponent implements OnInit {
  selectedSchedule:number;
  client :Client;
  regions: Region ;
  addresses: Address;
  schedules: Schedule;

  group= new FormGroup({
    regionControl: new FormControl('', [Validators.required,] , ),

    streetControl: new FormControl('', [Validators.required,] , )
    ,
    buildingNumberControl : new FormControl('', [ Validators.required,])
    ,
    apartmentNumberControl : new FormControl('', [ Validators.required,])
    ,
    scheduleControl : new FormControl('', [ Validators.required,])
  })
  activeTabIndex = 0;
  constructor (private service:NewRequestDetailService,private dialog:MatDialog,
    private  activatedRoute: ActivatedRoute,private router:Router,
    private service2: ProfileService ){ 
   // this.initialData(); 
   this.selectedSchedule = (<unknown>this.router.getCurrentNavigation().extras.state) as number;
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.group.controls[controlName].hasError(errorName);
  }
  ngOnInit(): void { 
      this.initialData();
      this.activatedRoute.queryParams.subscribe((params) => {
        if (params.tab) {
          this.activeTabIndex = params.tab as number;
        }
      });
  }
  initialData(){
    if(tokenGetter()){
      this.service2.getClientData().subscribe(data=>{
        this.client = data as Client;
        this.service.getRegion().subscribe(  
          data => {  
            this.regions= data as Region;

            this.service.getAddresses(this.client.address.regionId).subscribe(  
              data => {  
                this.addresses= data as Address ;  
                console.log(this.addresses);
              },err=>{
                setTimeout(() => this.router.url,10000); 
                this.initialData();
              });
              this.service.getSchedules(this.client.address.regionId).subscribe(  
                data => {  
                  this.schedules = data as Schedule ;  
                  console.log(this.schedules);
                },err=>{
                  setTimeout(() => this.router.url,10000); 
                  this.initialData();
                }
              );
            }
        );
      },err=>{
        setTimeout(() => this.router.url,10000); 
        console.log("test");
        this.initialData();
      })
     }

/*     this.service.getClient().subscribe(  
      data => {  
        this.client = data as Client ;  
        console.log(this.client)
      }
    ); */
  }


  onOptionsSelected(){
    let value = this.group.controls['regionControl'].value;
    this.service.getAddresses(value).subscribe(  
      data => {  
        this.addresses= data as Address ;  
        console.log(this.addresses);
      }  
    ); 
    this.service.getSchedules(value).subscribe(  
      data => {  
        this.schedules = data as Schedule ;  
        console.log(this.schedules);
      }  
    ); 
  }
  onSubmit() {
 console.log("on submit");
    let credentials  = {
      "id": 0,
      "apartmentNumber": (this.group.controls['apartmentNumberControl'].value),
      "clientId": 0 ,
      "scheduleId": (this.group.controls['scheduleControl'].value),
      "buildingNumber":  (this.group.controls['buildingNumberControl'].value),
      "points": 0,
      "orgaincWeight": 0,
      "nonOrganicWeight": 0,
      "addressId": (this.group.controls['streetControl'].value),
      "collectorId": 1,
      "rate": 0
  } 
  let message;

    console.log(credentials)

    this.service.postNewRequestDetails(credentials).subscribe(response =>
       {console.log(response);
        message="Request Submited"
        this.openNotifyDialogBox(message);
      },
      err => {console.log(err);
        message="Sorry, Something went Wrong \n Please Try Again Later"
        this.openNotifyDialogBox(message);
      }) 
 
   } 

   openNotifyDialogBox(message){
    this.dialog.open(NotifyDialogBoxComponent,{ data: message})
  }
   clickMe(form:Form){
     console.log(form);
   }
   
   public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.router.navigate(["/Request",], { queryParams: { tab: tabChangeEvent.index } });
  }
}

