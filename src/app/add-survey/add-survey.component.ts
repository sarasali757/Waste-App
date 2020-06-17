import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route,Params,ActivatedRoute } from '@angular/router';
import { Port } from '../_models/port';
import { SurveyQues } from '../_models/survey-ques';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {
  port:Port=new Port()
  i:number
  s=new Array<string>(4)
  sur:SurveyQues=new SurveyQues();
  public choiceArr= [
    {id: 0, text: 'Not satisfied'},
    {id: 1, text: 'Partiely satisfied'},
   {id: 2, text: 'Satisfed '},
  {id: 3, text: 'More than satisfied'},
    
];
public ans: {id: number;text: string;val:string;
}[]= [
  {id: 1, text: 'Sentence 1',val:'Sentence 1'},
  {id: 2, text: 'Sentence 2',val:'Sentence 2'},
 {id: 3, text: 'Sentence 3',val:'Sentence 3'},
 {id: 4, text: 'Sentence 4',val:'Sentence 4'},
  
];
survey:SurveyQues[]=[]
  survey1:SurveyQues[]=[]
  id: number;
  sub: any;
  loginId: any;
  print(r:string,id:number){this.s[id]=r;
    //   for(let p in this.ans){
    //  let obj= this.choiceArr.find(o=>o.id==this.ans[p].id)
    //  this.ans[p].text=obj.text
     // }
      console.log(this.s)
    }
    copyArray(){
      for(let p in this.survey){
        this.survey1[this.i].Question=this.survey[this.i].Question
        console.log("hiiiiii")
        console.log(this.survey1[this.i])
        this.survey1[this.i].choiceA=this.survey[this.i].choiceA
        this.survey1[this.i].choiceB=this.survey[this.i].choiceB
        this.survey1[this.i].choiceC=this.survey[this.i].choiceC
        this.survey1[this.i].choiceD=this.survey[this.i].choiceD
        
           }
    }

    displaySurv(n:number){
      this.http.get<SurveyQues[]>("http://localhost:"+this.port.port+"/api/survey/GetSurvey?CId"+n, {observe: 'response',responseType:"json"})
   .subscribe(response => {console.log(response.status);
  console.log(response)
     this.survey=response.body
  console.log(this.survey)
    this.copyArray();
    // console.log(this.choiceArr[1])
     console.log(this.survey1)
  
     //for(this.i=0;this.i++;this.i<this.choiceArr.length){
      // this.choiceArr[0].text=this.survey1[0].choiceA
      // this.choiceArr[1].text=this.survey1[0].choiceB
      // this.choiceArr[2].text=this.survey1[0].choiceC
  
    // }
    })
  }
  send(){
    this.http.post("http://localhost:"+this.port.port+"/api/survey/PostSurvUsers",this.s).subscribe(response=>console.log(response))
  }
  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let token = localStorage.getItem("jwt");
    const dec=new JwtHelperService();
   const decoded=   dec.decodeToken(token)
 this.loginId=decoded.UserId
    // this.sub = this.route.queryParams
    //   .subscribe(params => {  
    //     this.id = +params['id'] || 0;// Defaults to 0 if no query param provided.
 // });
this. displaySurv(this.loginId)

 }
}



