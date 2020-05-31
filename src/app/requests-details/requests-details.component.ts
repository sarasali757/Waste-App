import { Component, OnInit, ViewChild } from '@angular/core';
import { Requests} from '../shared/new-request-detail.model';
import {MatTableDataSource} from '@angular/material/table';
import { RequestsDetailsService } from '../shared/requests-details.service'
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-requests-details',
  templateUrl: './requests-details.component.html',
  styleUrls: ['requests-details.component.css']
})
export class RequestsDetailsComponent implements OnInit {

  dataSource: MatTableDataSource<Requests>;

  pageSize = 5;
  currentPage = 0;
  totalSize = 0;

@ViewChild(MatPaginator) paginator: MatPaginator;
  array: any;

  constructor(private service: RequestsDetailsService) {
   
   }
   ngOnInit(): void {
    this.getArray();
  }

  displayedColumns: string[] = ['schedule.time', 'orgaincWeight', 'nonOrganicWeight', 'points'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  
  private getArray() { // add your request in this function 
     console.log("hi");
    this.service.getRequests().subscribe(  
      (data : Requests[]) => {  
        this.dataSource = new MatTableDataSource < Requests > (data);
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
