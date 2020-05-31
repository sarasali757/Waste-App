import { Component, OnInit, ViewChild } from '@angular/core';
import { PromotionService } from '../shared/promotion.service';
import { ClientPromotions } from '../_models/client-promotions.model';


import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-my-promotions',
  templateUrl: './my-promotions.component.html',
  styleUrls: ['./my-promotions.component.css']
})

export class MyPromotionsComponent implements OnInit {
  
  dataSource: MatTableDataSource<ClientPromotions>;

  pageSize = 5;
  currentPage = 0;
  totalSize = 0;

@ViewChild(MatPaginator) paginator: MatPaginator;
  array: any;

  constructor(private service: PromotionService) {}

   ngOnInit(): void {
    this.getArray();
  }

  displayedColumns: string[] = ['promtion.name', 'promtion.requiredPoints', 'promtion.dateTo', 'promtion.company.name'];

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
     console.log("hi");

    this.service.GetMyPromotions().subscribe(  
      (data : ClientPromotions[]) => {  
        this.dataSource = new MatTableDataSource < ClientPromotions > (data);
        console.log("data source ="+this.dataSource.data);
        this.dataSource.paginator = this.paginator;
        this.array = data;
        this.totalSize = this.array.length;
        this.iterator();
        
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
