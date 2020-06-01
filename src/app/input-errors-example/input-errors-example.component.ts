import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-input-errors-example',
  templateUrl: './input-errors-example.component.html',
  styleUrls: ['./input-errors-example.component.css']
})
export class InputErrorsExample {
 
  
  group= new FormGroup({
    cNameControl: new FormControl('', [Validators.required, Validators.minLength(3)] , )
    ,emailFormControl : new FormControl('', [ Validators.required,])
  })
  public hasError = (controlName: string, errorName: string) =>{
    return this.group.controls[controlName].hasError(errorName);
  }
  onSubmit(form){
    console.log(form)
  }
}
