import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { HotelEditComponent } from '../hotel-edit/hotel-edit.component';
import { Hoteldto } from '../models/hotelDto';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<Hoteldto>;

  dataSource: any;

  //dataSource!: Observable<Hoteldto[]>;
  displayedColumns: string[] = ['name', 'address'];
  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {


    //TODO: async işlem için
    // this.dataSource = this.store.pipe(select(selectHotels))


  }

  addData(): void {


    const dialogRef = this.dialog.open(HotelEditComponent, {
      width: '250px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result?.status) {

        //TODO: modal üzerinden zaten veri geliyor fakat ngrx üzerinden almaya çalıştım
        // this.dataSource.push(result.data);
        // this.table.renderRows();

      }

    });
  }

}
