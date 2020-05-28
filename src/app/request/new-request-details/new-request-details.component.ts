import { Component, OnInit } from '@angular/core';
import { NewRequestDetailService } from '../../shared/new-request-detail.service';
import { NgForm } from '@angular/forms';
import { NewRequestClientModel, NewRequestRegionModel, NewRequestAddressModel ,NewRequestScheduleModel} from '../../shared/new-request-detail.model';


@Component({
  selector: 'app-new-request-details',
  templateUrl: './new-request-details.component.html',
  styles: []
})

export class NewRequestDetailsComponent implements OnInit {

  client :NewRequestClientModel;
  regions: NewRequestRegionModel ;
  addresses: NewRequestAddressModel;
  schedules: NewRequestScheduleModel;

  constructor (private service:NewRequestDetailService){ 
    this.initialData();
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
}

