import { Schedule } from './schedule.model'

export class Requests {
    id :number;
    apartmentNumber:number;
    clientId :number;
    scheduleId :number;
    buildingNumber:number;
    points :number;
    orgaincWeight :number;
    nonOrganicWeight :number;
    addressId :number;
    collectorId :number;
    rate :number;
    schedule:Schedule;
}
