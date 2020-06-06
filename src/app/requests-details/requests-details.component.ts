import { Component, OnInit, ViewChild } from '@angular/core';
//import { Requests} from '../shared/new-request-detail.model';
import {MatTableDataSource} from '@angular/material/table';
import { RequestsDetailsService } from '../shared/requests-details.service'
import {MatPaginator} from '@angular/material/paginator';

import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatSort } from '@angular/material/sort';


import {Requests} from '../_models/requests.model'
@Component({
  selector: 'app-requests-details',
  templateUrl: './requests-details.component.html',
  styleUrls: ['requests-details.component.css'],
  animations: [trigger('detailExpand', [
    state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
    state('*', style({ height: '*', visibility: 'visible' })),
    transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),
],
})
export class RequestsDetailsComponent implements OnInit {

 /*  dataSource: MatTableDataSource<Requests>;

  pageSize = 5;
  currentPage = 0;
  totalSize = 0;

@ViewChild(MatPaginator) paginator: MatPaginator;
  array: any;
 */
 
filter;
p: number = 1;
result;

dataSource: MatTableDataSource<Requests>;
pageSize = 5;
currentPage = 0;
totalSize = 0;

displayedColumns: string[] = ['time', 'orgaincWeight', 'nonOrganicWeight', 'points','moreDetials'];

isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');
expandedElement: any;

Element : Requests; 

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

array: any;

  constructor(private service: RequestsDetailsService) {
   
   }
   ngOnInit(): void {
    this.getArray();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  private getArray() { // add your request in this function 
     console.log("hi");
    this.service.getRequests().subscribe(  
      (data : Requests[]) => {  
        this.dataSource = new MatTableDataSource < Requests > (data.sort(function(a,b) { 
          return new Date(b.schedule.time).getTime() - new Date(a.schedule.time).getTime() 
      }));
        console.log("data source ="+this.dataSource.data);
        this.dataSource.paginator = this.paginator;
        this.array = data;
        this.totalSize = this.array.length;
        this.iterator();
        this.dataSource.sort = this.sort;
      }  
    );
  }
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
