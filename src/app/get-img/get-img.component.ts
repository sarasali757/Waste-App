import { Component, OnInit, SecurityContext } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Port } from '../_models/port';
/* 
import { ConfigService } from './config.service';
import { SettingsService } from './settings.service'; */
import { DomSanitizer } from '@angular/platform-browser';
import { Instructions } from '../_models/Instructions.model';

@Component({
  selector: 'app-get-img', 
  templateUrl: './get-img.component.html',
  styleUrls: ['./get-img.component.css']
})
export class GetImgComponent implements OnInit {

  public createImgPath = (image:string) => {

    return "http://localhost:" +this.port.port+"/Resources/Images/"+image;
  }

/*   public response: {dbPath: "\Resources\Images\Screenshot_11.png"};
  
  user = {
    imgPath: this.response.dbPath
  }
 */
  // "Resources\Images\Screenshot_11.png"
  port: Port = new Port();
  images : Instructions[];
  constructor(private http: HttpClient) { }

   /*  public uploadFinished = (event) => {
      this.response = event;
    } */
    
    ngOnInit(): void {
      this.http.get('http://localhost:'+this.port.port+'/Api/Instructions/GetInstructions/').subscribe(data=>{
        this.images = data as Instructions [];
        console.log(this.images)
      })


     /*  const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      });
      this.http.get<any>('http://localhost:'+this.port.port+'/Api/Test/GetImage')
      .subscribe(
      data => {
          let mimeType = data.mimeType;
          this.imageData = 'data:' + mimeType + ';base64,' + data.imageData;
      }); */

/* not very bad
  
      this.http.get<Blob>('http://localhost:'+this.port.port+'/Api/Test/GetImage',
       {headers: headers, responseType: 'blob' as 'json' })
      .subscribe((baseImage : any) => {
        alert(JSON.stringify(baseImage));
        console.log("hi",baseImage)
        let objectURL = 'data:image/jpg;base64,' + baseImage;
        console.log("url",objectURL)
        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
       
      }); */
     /*  this.http.get('http://localhost:'+this.port.port+'/Api/Test/GetImage')
      .subscribe(response => this.image.nativeElement.src = window.URL.createObjectURL(response))
  */
    /*   this.http.get('http://localhost:'+this.port.port+'/Api/Test/GetImage').subscribe(response => {
        this.image = response['imgData'];
        this.imageSrc = 'data:image/jpeg;base64,' + this.image;
        console.log(this.imageSrc);
    },
    err=> console.log(err)); */

     /*  this.http.get('http://localhost:'+this.port.port+'/Api/Test/GetImage')  
      .map( image => image.text() )  
      .subscribe(  
        data => {  
          this.imageData = 'data:image/png;base64,' + data;  
          this.sanitizedImageData = this.sanitizer.bypassSecurityTrustUrl(this.imageData);  
        }  
      );  */
  }
/* 
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }
 getImage() {
  this.isImageLoading = true;
  this.http.get('http://localhost:'+this.port.port+'/Api/Test/GetImage',
  {headers: this.httpHeaders, responseType: 'blob' }).subscribe(data => {
    this.createImageFromBlob(data);
    this.isImageLoading = false;
  }, error => {
    this.isImageLoading = false;
    console.log(error);
  });
} */
}