import { ClientCategory } from './client-category';
import { Address } from './address.model';

export class Client {
    
     firstName:string ;
     lastName:string; 
     email:string;
     buildingNumber:number;
     mobile:string; 
     apartmentNumber:number;

     clientCategory: ClientCategory
     address: Address

     categoryId:number;
     addressId:number;
}
