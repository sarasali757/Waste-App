import { Region } from './region.model';

export class Schedule {
    id: number;
    time;
    regionId: number;
    driverId: number;
    region : Region;
}
