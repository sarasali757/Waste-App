import { Component, OnInit } from '@angular/core';
import { NewRequestDetailService } from '../../shared/new-request-detail.service';
import { NgForm, Form, FormControl, Validators, FormGroup } from '@angular/forms';
import { NewRequestClientModel, NewRequestRegionModel, NewRequestAddressModel ,NewRequestScheduleModel, Requests} from '../../shared/new-request-detail.model';


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

  public ownerForm: FormGroup;
  owner: any;
  
  constructor (private service:NewRequestDetailService){ 
    //this.initialData();
  }
 
  ngOnInit(): void { 
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl(new Date()),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
      this.initialData();
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
 

  public createOwner = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  }

  private executeOwnerCreation = (ownerFormValue) => {
     this.owner =  {
      id: ownerFormValue.id,
      buildingNumber : ownerFormValue.buildingNumber
    }
    // add request here 
    console.log(this.owner);
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

  onOptionsSelected(value:string){
    
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
  onSubmit(form:NgForm) {
 
    console.log(form.value);
    let credentials = {
        "id": 0,
        "apartmentNumber": (+form.value.apartmentNumber),
        "clientId": 0 ,
        "scheduleId": (+form.value.schedule),
        "buildingNumber":  (+form.value.buildingNumber),
        "points": 0,
        "orgaincWeight": 0,
        "nonOrganicWeight": 0,
        "addressId":  (+form.value.streetName),
        "collectorId": 1,
        "rate": 0
    }
    this.service.postNewRequestDetails(credentials);
 
      console.log(form.value);
      console.log(+form.value.region);
   } 

   clickMe(form:Form){
     console.log(form);
   }
}

