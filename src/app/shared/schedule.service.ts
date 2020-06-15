import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Port } from '../_models/port';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  port:Port=new Port();
  constructor( private httpService: HttpClient ) { }

  getCompanyMonthSchedule(regionId:number){
    return this.httpService.get('http://localhost:'+ this.port.port +'/home/monthlyschedulebyregion?regionId='+regionId);
  }
}
