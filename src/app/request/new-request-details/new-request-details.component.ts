import { Component, OnInit } from '@angular/core';
import { NewRequestDetailService } from '../../shared/new-request-detail.service';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { NewRequestClientModel, NewRequestRegionModel, NewRequestAddressModel ,NewRequestScheduleModel} from '../../shared/new-request-detail.model';


@Component({
  selector: 'app-new-request-details',
  templateUrl: './new-request-details.component.html',
  styleUrls: ['./new-request-details.component.css']
})

export class NewRequestDetailsComponent implements OnInit {

  client :NewRequestClientModel;
  regions: NewRequestRegionModel ;
  addresses: NewRequestAddressModel;
  schedules: NewRequestScheduleModel;

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

  constructor (private service:NewRequestDetailService){ 
    this.initialData();
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.group.controls[controlName].hasError(errorName);
  }
  ngOnInit(): void { 
      this.initialData();
  }
  log(x){console.log(x)}

  initialData(){
    this.service.getClient().subscribe(  
      data => {  
        this.client = data as NewRequestClientModel ;  
        console.log(this.client)
      }
    );

    this.service.getRegion().subscribe(  
      data => {  
        this.regions= data as NewRequestRegionModel;
        
        this.service.getAddresses(this.client.address.regionId).subscribe(  
          data => {  
            this.addresses= data as NewRequestAddressModel ;  
            console.log(this.addresses);
          }  );

          this.service.getSchedules(this.client.address.regionId).subscribe(  
            data => {  
              this.schedules = data as NewRequestScheduleModel ;  
              console.log(this.schedules);
            }  
          );  
      }  
    );

  }

test(val){
  console.log(val);
}
  onOptionsSelected(){
    let value = this.group.controls['regionControl'].value;
    this.service.getAddresses(value).subscribe(  
      data => {  
        this.addresses= data as NewRequestAddressModel ;  
        console.log(this.addresses);
      }  
    ); 
    this.service.getSchedules(value).subscribe(  
      data => {  
        this.schedules = data as NewRequestScheduleModel ;  
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

    console.log(credentials)
    this.service.postNewRequestDetails(credentials);
 
     // console.log(form.value);
    //  console.log(+form.value.region);
   } 

   clickMe(form:Form){
     console.log(form);
   }
}

