import { Component, OnInit } from '@angular/core';
import { NewRequestDetailService } from '../shared/new-request-detail.service' 

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styles: [],
})
export class RequestComponent implements OnInit {

  constructor(public service:NewRequestDetailService) {
  
   }

  ngOnInit(): void {
   
  }
 

}
