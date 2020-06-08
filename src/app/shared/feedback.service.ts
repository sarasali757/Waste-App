import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../_models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
addFeedback(fb:Feedback){
  return this.http.post("http://localhost:50856/api/feedback/add",fb);
}
  constructor(private http:HttpClient) { }
}
