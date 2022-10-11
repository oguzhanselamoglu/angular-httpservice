import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Hoteldto } from '../models/hotelDto';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.scss']
})
export class HotelEditComponent implements OnInit {
  data: Hoteldto = new Hoteldto();
  constructor( public dialogRef: MatDialogRef<HotelEditComponent>) {

  }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void{

    this.dialogRef.close({
      status: true,
      data:this.data
  });
  }
}
