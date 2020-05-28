export class NewRequestClientModel {
    address:NewRequestAddressModel;
    addressId: number;
    apartmentNumber: number;
    buildingNumber: number;
    categoryId: number;
    clientName: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    mobile: string;
    password: number;
    totalPoints: number;
    constructor(){
        this.address.id=0;
        this.address.regionId=0;
        this.address.streetName="";
    }
}
export class NewRequestRegionModel {
    id: number;
    name: string;
}
export class NewRequestAddressModel {
    id: number;
    regionId: number;
    streetName: string;
} 
export class NewRequestScheduleModel {
    id: number;
    date:string;
    time:string;
    regionId: number;
    driverId: number;
} 

export class Requests{
    id 
    apartmentNumber
    clientId 
    scheduleId 
    buildingNumber
    points 
    orgaincWeight 
    nonOrganicWeight 
    addressId 
    collectorId 
    rate 
    schedule:NewRequestScheduleModel;
}