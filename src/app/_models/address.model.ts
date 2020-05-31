import { Region } from './region.model';

export class Address {
    id: number;
    regionId: number;
    streetName: string;
    region : Region;
}
