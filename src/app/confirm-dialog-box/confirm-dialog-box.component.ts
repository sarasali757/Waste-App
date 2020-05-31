import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog-box',
  templateUrl: './confirm-dialog-box.component.html',
  styles: []
})
export class ConfirmDialogBoxComponent implements OnInit {

  display;
  constructor(@Inject(MAT_DIALOG_DATA) data:any) {
    this.display = data;
    console.log(data);
   }

  ngOnInit(): void {
  }

}
