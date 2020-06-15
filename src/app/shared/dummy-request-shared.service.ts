import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyRequestSharedService {
  onMainEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }
}
