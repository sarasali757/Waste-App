import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Port } from '../_models/port';
import { Instructions } from '../_models/Instructions.model';

@Component({
  selector: 'app-test-img',
  templateUrl: './test-img.component.html',
  styleUrls: ['./test-img.component.css']
})
export class TestImgComponent implements OnInit {
  port: Port = new Port();

  
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
  
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {

  }
  public uploadFile = (files) => {

    let  obj : HttpEvent<Instructions>;
    if (files.length === 0) {
      return;
    }
 
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
 
    this.httpService.post('http://localhost:'+this.port.port+'/Api/Instructions/UploadInstructionImage/', 
    formData, {reportProgress: true, observe: 'events'})
      .subscribe( (event)  => {
        console.log("event",event)
        event.type.valueOf
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          let obj = event.body as Instructions ;
          obj.details = "first separate trash "
          
          this.httpService.post('http://localhost:'+this.port.port+'/Api/Instructions/AddInstructionDetails/',
          JSON.stringify(obj),
          {headers: new HttpHeaders({ "Content-Type": "application/json; charset=utf-8"})}
          ).subscribe(Response=>{
            console.log(Response);
          })
        }
      });
  }

/*  upload(files: FileList) {
    const file = files.item(0);
    console.log(file);
    const formData: FormData = new FormData();
    formData.append('Image', file, file.name);
    this.httpService.post('http://localhost:'+this.port.port+'/Api/Test/SaveImage/', formData).subscribe(r=>{
      console.log("saved");
    },err=>{
      console.log(err);
    });
  } */
}


