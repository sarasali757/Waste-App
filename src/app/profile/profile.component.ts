import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/profile.service';
import { Client } from '../_models/client.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { NewRequestRegionModel, NewRequestAddressModel } from '../shared/new-request-detail.model';
import { ClientCategory } from '../_models/client-category';
import { Region } from '../_models/region.model';
import { Address} from '../_models/address.model' 
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NotifyDialogBoxComponent } from '../notify-dialog-box/notify-dialog-box.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  client;
  regions: Region [];

  addresses: Address[];
  categories : ClientCategory[];
  onMain: boolean = false;

  group= new FormGroup({
    
    firstNameControl: new FormControl('', [Validators.required,] , ),
    
    lastNameControl: new FormControl('', [Validators.required,] , ),

    regionControl: new FormControl('', [Validators.required,] , ),

    streetControl: new FormControl('', [Validators.required,Validators.nullValidator] , )
    ,
    buildingNumberControl : new FormControl('', [ Validators.required,])
    ,
    apartmentNumberControl : new FormControl('', [ Validators.required,])
    ,
    mobileControl : new FormControl('', [ Validators.required, ]),
    
    emailControl : new FormControl('', [ Validators.required, Validators.email]),

    categoryControl : new FormControl('', [ Validators.required,])
  })
  constructor(private service:ProfileService,private location: Location,private dialog:MatDialog,private route:Router) 
  {}

  initial(){
    this.service.getClientData().subscribe(data =>{
      this.client = data as Client
      console.log(this.client);
      this.service.getRegion().subscribe(
        data=>{
          this.regions = data as Region[];
          this.service.getAddresses(this.client.address.regionId).subscribe(data=>{
            this.addresses = data as Address[];
          });
        }
      );
    });
    this.service.getCategories().subscribe(data=>{
      this.categories = data as ClientCategory[];
      console.log(this.categories);
    });
    
  }
  ngOnInit(): void {
    this.initial();
    this.service.onMainEvent.subscribe(
      (onMain) => {
        this.onMain = onMain;
        console.log(onMain);
      });
  }
  
/*   updateOnMain(onMain):void {
    this.service.onMainEvent.emit(onMain);
    console.log(onMain);
  } */
  onOptionsSelected(){
  
    let value = this.group.controls['regionControl'].value;
    if(value){
    this.service.getAddresses(value).subscribe(  
      data => {  
        this.addresses= data as Address [];  
        console.log(this.addresses);
        this.group.controls['streetControl'].setErrors({'incorrect': true});
      } 
    ); 
  }
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
    var clientAddress = this.addresses.find(o => o.id === credentials.addressId);
    this.client.address.streetName = clientAddress.streetName;

    var clientRegion = this.regions.find(o => o.id === clientAddress.regionId);
    this.client.address.region.name = clientRegion.name ;

    
    var clientCat= this.categories.find(o => o.id === credentials.categoryId);
    this.client.category.name = clientCat.name ;

   // console.log(credentials);
    this.service.updateClient(credentials).subscribe(response => 
      { //   this.initial();
        let message ="Updated Successfully"
        this.openNotifyDialogBox(message);
   
        this.service.onMainEvent.emit(this.client);
        this.route.navigate(["/Home"]);
      
        // location.reload();
      },
      err => {console.log(err);
      let message ="Sorry, Something went Wrong \n Please Try Again Later"
      this.openNotifyDialogBox(message);
      }) ; 

  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.group.controls[controlName].hasError(errorName);
  }
  openNotifyDialogBox(message){
    this.dialog.open(NotifyDialogBoxComponent,{ data: message})
  }

}
