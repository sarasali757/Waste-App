import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyNotificationService {

  onMainEvent: EventEmitter<string[]> = new EventEmitter();
  constructor() { }
}
