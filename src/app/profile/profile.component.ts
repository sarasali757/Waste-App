import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/profile.service';
import { Client } from '../_models/client.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { NewRequestRegionModel, NewRequestAddressModel } from '../shared/new-request-detail.model';
import { ClientCategory } from '../_models/client-category';
import { Region } from '../_models/region.model';
import { Address} from '../_models/address.model' 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  client;
  regions: Region ;

  addresses: Address;
  categories : ClientCategory;
  group= new FormGroup({
    
    firstNameControl: new FormControl('', [Validators.required,] , ),
    
    lastNameControl: new FormControl('', [Validators.required,] , ),

    regionControl: new FormControl('', [Validators.required,] , ),

    streetControl: new FormControl('', [Validators.required,] , )
    ,
    buildingNumberControl : new FormControl('', [ Validators.required,])
    ,
    apartmentNumberControl : new FormControl('', [ Validators.required,])
    ,
    mobileControl : new FormControl('', [ Validators.required, ]),
    
    emailControl : new FormControl('', [ Validators.required, Validators.email]),

    categoryControl : new FormControl('', [ Validators.required,])
  })
  constructor(private service:ProfileService) 
  {
  }
  
  initial(){
    this.service.getClientData().subscribe(data =>{
      this.client = data as Client
      console.log(this.client);

      this.service.getRegion().subscribe(
        data=>{
          this.regions = data as Region;
          this.service.getAddresses(this.client.address.regionId).subscribe(data=>{
            this.addresses = data as Address;
          });
        }
      );
    });
    this.service.getCategories().subscribe(data=>{
      this.categories = data as ClientCategory;
      console.log(this.categories);
    });
    
  }
  ngOnInit(): void {
    this.initial();
  }
  onOptionsSelected(){
  
    let value = this.group.controls['regionControl'].value;
    
    this.service.getAddresses(value).subscribe(  
      data => {  
        this.addresses= data as Address ;  
        console.log(this.addresses);
      }  
    ); 
  }
  submit(){
    console.log("on submit");
    let credentials  = {
      "id":0,
      "firstName":this.group.controls["firstNameControl"].value ,
     "lastName":this.group.controls["lastNameControl"].value ,
     "email":this.group.controls["emailControl"].value ,
     "buildingNumber":this.group.controls["buildingNumberControl"].value ,
     "mobile":this.group.controls["mobileControl"].value ,
     "apartmentNumber":this.group.controls["apartmentNumberControl"].value ,
     "categoryId":this.group.controls["categoryControl"].value ,
     "addressId":this.group.controls["streetControl"].value ,
    } 
    console.log(credentials);
    this.service.updateClient(credentials);
    this.initial();
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.group.controls[controlName].hasError(errorName);
  }

}
