import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../shared/promotion.service';
import { Promotion } from '../_models/promotion.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent } from '../confirm-dialog-box/confirm-dialog-box.component';
import { NotifyDialogBoxComponent } from '../notify-dialog-box/notify-dialog-box.component';


@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styles: []
})
export class PromotionsComponent implements OnInit {
  filter;
  p: number = 1;
  promotions:Promotion;
  result;

  constructor(private service: PromotionService,private dialog:MatDialog) {
    
    service.getPromotions().subscribe(  
      data => {  
        this.promotions = data as Promotion ;  
        console.log(this.promotions)
      }  
    );
   }

  ngOnInit(): void {
  }
  openDialog(promotion){
    this.dialog.open(ConfirmDialogBoxComponent,{ data: promotion.name})
    .afterClosed()
    .subscribe(result=> 
    {  
      this.result = result;
      console.log(this.result);
      if(result == true){
        this.service.AddClientPromotion(promotion.id).subscribe(
          data  => {
            
          console.log("PUT Request is successful ", data);
            let message;
          if(data == false){
            message = "Not Enough Points";
          }else{
            message = "Promotion Added Successfully"
          }
          this.openNotifyDialogBox(message);
          });
      }
    });
  }

  openNotifyDialogBox(message){
    this.dialog.open(NotifyDialogBoxComponent,{ data: message})
  }
}

