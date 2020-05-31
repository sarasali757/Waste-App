import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notify-dialog-box',
  templateUrl: './notify-dialog-box.component.html',
  styles: []
})
export class NotifyDialogBoxComponent implements OnInit {

  display;
  constructor(@Inject(MAT_DIALOG_DATA) data:any) {
    this.display = data;
    console.log(data);
   }

  ngOnInit(): void {
  }
}
