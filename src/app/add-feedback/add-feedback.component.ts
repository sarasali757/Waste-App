import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../shared/feedback.service'
import { Feedback } from '../_models/feedback';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { FeedbackCategory } from '../_models/feedback-category';
import { MatDialog } from '@angular/material/dialog';
import { NotifyDialogBoxComponent } from '../notify-dialog-box/notify-dialog-box.component';


@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css'],
  providers:[FeedbackService]
})
export class AddFeedbackComponent implements OnInit {
  newFb:Feedback=new Feedback();
  cats:FeedbackCategory[]=[];
  getCatgs(){
   return this.http.get<FeedbackCategory[]>("http://localhost:50856/api/feedbackcategory/getall");
  }
  constructor(private s:FeedbackService,private http:HttpClient,private dialog:MatDialog) { 
    let jwthelper = new JwtHelperService();
    this.newFb.clientId = jwthelper.decodeToken(tokenGetter()).UserId;
    console.log(this.newFb.clientId);
  }
  send(t){
    //console.log(t);
    this.newFb.categoryId = t.value.catgId;
    this.newFb.feedbackContent = t.value.fbContent;
    console.log(this.newFb);
      this.s.addFeedback(this.newFb).subscribe(a=>{
        console.log(a);
        let message ="Thanks for sharing your feedback."
        this.dialog.open(NotifyDialogBoxComponent,{ data: message})

        //message to user that fb is sent successfully
      })
  }
 
  ngOnInit(): void {
    this.getCatgs().subscribe(a=>{
    this.cats=a;
    })
  }

}
