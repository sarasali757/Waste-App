import { Component, OnInit, ViewChild } from '@angular/core';
import { PromotionService } from '../shared/promotion.service';
import { Promotion } from '../_models/promotion.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent } from '../confirm-dialog-box/confirm-dialog-box.component';
import { NotifyDialogBoxComponent } from '../notify-dialog-box/notify-dialog-box.component';


import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  filter;
  p: number = 1;
  promotions:Promotion;
  result;

  dataSource: MatTableDataSource<Promotion>;

  pageSize = 5;
  currentPage = 0;
  totalSize = 0;

@ViewChild(MatPaginator) paginator: MatPaginator;
  array: any;


  constructor(private service: PromotionService,private dialog:MatDialog) {
    
  /*   service.getPromotions().subscribe(  
      data => {  
        this.promotions = data as Promotion ;  
        console.log(this.promotions)
      }  
    ); */
   }

  ngOnInit(): void {
    this.getArray();
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
///

displayedColumns: string[] = ['name', 'requiredPoints','dateFrom','dateTo', 'company.name','add','id'];

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

public handlePage(e: any) {
  this.currentPage = e.pageIndex;
  this.pageSize = e.pageSize;
  this.iterator();
}

private getArray() {
  this.service.getPromotions().subscribe(  
    (data : Promotion[]) => {  
      this.dataSource = new MatTableDataSource < Promotion > (data);
      console.log("data",this.dataSource.data);
      this.dataSource.paginator = this.paginator;
      this.array = data;
      this.totalSize = this.array.length;
      this.iterator();
      console.log("hi")
    }  
  );
}
private iterator() {
  const end = (this.currentPage + 1) * this.pageSize;
  const start = this.currentPage * this.pageSize;
  const part = this.array.slice(start, end);
  this.dataSource = part;
}

}

