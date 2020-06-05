import { Component, OnInit, ViewChild } from '@angular/core';
import { PromotionService } from '../shared/promotion.service';
import { Promotion } from '../_models/promotion.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent } from '../confirm-dialog-box/confirm-dialog-box.component';
import { NotifyDialogBoxComponent } from '../notify-dialog-box/notify-dialog-box.component';


import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css'],
  animations: [trigger('detailExpand', [
    state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
    state('*', style({ height: '*', visibility: 'visible' })),
    transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),
],
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

  displayedColumns: string[] = ['name', 'requiredPoints','dateFrom','dateTo', 'company.name','add','moreDetials','id'];

  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');
  expandedElement: any;

  Element : Promotion;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  array: any;
  clientPoints;
  constructor(private service: PromotionService,private dialog:MatDialog) {
    this.getClientPoints();
   }
   
  getClientPoints(){
    this.service.getClientPoints().subscribe(data=>{
      this.clientPoints = data 
    });
  }
  ngOnInit(): void {
    
    this.getArray();
  }
  
  openDialog(promotion){
    
    
    let message1 = "Are you Sure you Want To Add\n"+ "'"+ promotion.name + "'" + "\n into your Promotions"
    
    this.dialog.open(ConfirmDialogBoxComponent,{ data:  message1})
    .afterClosed()
    .subscribe(result=> 
    {  
      this.result = result;
      console.log(this.result);
      if(result == true){
        this.service.AddClientPromotion(promotion.id).subscribe(
          data  => {
            
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log("PUT Request is successful ", data);
            let message2;
          if(data == false){
            message2 = "Not Enough Points !";
          }else{
            message2 = "Promotion Added Successfully"
            this.getClientPoints();
          }
          this.openNotifyDialogBox(message2);
          });
      }
    });
  }
  openNotifyDialogBox(message){
    this.dialog.open(NotifyDialogBoxComponent,{ data: message})
  }
///


/* applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
} */
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
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
/* export class ExampleDataSource extends DataSource<any> {
  connect(): Observable<Element[]> {
    const rows = [];
    data.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log(rows);
    return of(rows);
  }

  disconnect() { }
} */