import { Component, OnInit, ViewChild } from '@angular/core';
import { PromotionService } from '../shared/promotion.service';
import { ClientPromotions } from '../_models/client-promotions.model';


import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
//
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatSort } from '@angular/material/sort';

import {} from '../promotions/cdk-detail-row.directive'
import { PromotionsComponent } from '../promotions/promotions.component'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-promotions',
  templateUrl: './my-promotions.component.html',
  styleUrls: ['./my-promotions.component.css'],
  animations: [trigger('detailExpand', [
    state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
    state('*', style({ height: '*', visibility: 'visible' })),
    transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),
],
})

export class MyPromotionsComponent  {
  
/*   dataSource: MatTableDataSource<ClientPromotions>;

  pageSize = 5;
  currentPage = 0;
  totalSize = 0;


@ViewChild(MatPaginator) paginator: MatPaginator;
  array: any;
 */
  filter;
  p: number = 1;
  result;

  dataSource: MatTableDataSource<ClientPromotions>;
  pageSize = 5;
  currentPage = 0;
  totalSize = 0;

  displayedColumns: string[] = ['promtion.name', 'promtion.requiredPoints', 
  'promtion.dateTo', 'promtion.company.name','moreDetials'];

  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');
  expandedElement: any;

  Element : ClientPromotions; //

  @ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  array: any;
  activeTabIndex: number;
//
  constructor(private service: PromotionService,private  activatedRoute: ActivatedRoute) {}
  /*  ngOnInit(): void {
      
  } */
  ngAfterViewInit() {
    this.getArray();
    
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.tab) {
        this.activeTabIndex = params.tab as number;
    
      }
    }); 
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

//
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getArray() {
    this.service.GetMyPromotions().subscribe(  
      (data : ClientPromotions[]) => {  
        this.dataSource = new MatTableDataSource < ClientPromotions > (data.sort(function(a,b) { 
          return new Date(a.promtion.dateTo).getTime() - new Date(b.promtion.dateTo).getTime() 
      }));
        console.log("data source ="+this.dataSource.data);
        this.dataSource.paginator = this.paginator;
        this.array = data;
        this.totalSize = this.array.length;
        this.iterator();
       /*  this.dataSource.filterPredicate = (data: ClientPromotions, filter: string) => {
          return data.Promtion.name == filter;
         }; */
         this.dataSource.sort = this.sort;
      }  
    );
  }
 
//
/* applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
 */
public handlePage(e: any) {
  this.currentPage = e.pageIndex;
  this.pageSize = e.pageSize;
  this.iterator();
}

private iterator() {
  const end = (this.currentPage + 1) * this.pageSize;
  const start = this.currentPage * this.pageSize;
  const part = this.array.slice(start, end);
  this.dataSource = part;
}
 
  
}

