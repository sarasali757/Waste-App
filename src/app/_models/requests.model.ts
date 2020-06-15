import { Schedule } from './schedule.model'
import { Address } from './address.model';
import { User } from './User.model';
import { Client } from './client.model';

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
    isSeparated;

    address: Address;
    collector: User;
    client: Client;
}
