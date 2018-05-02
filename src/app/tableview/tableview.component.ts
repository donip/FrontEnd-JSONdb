import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})
export class TableviewComponent {
  displayedColumns = ['manufacturer', 'type', 'color', 'reg'];
  dataSource: MatTableDataSource<CarData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public http: HttpClient) {
    this.getAllCars();

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.carsData);
  }

  carsData: any;

  getAllCars() {
    this.http.get(`http://localhost:3333/api/car`).subscribe(
      (data) => {
      this.carsData = data;
        console.log(this.carsData);
      });
  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface CarData {
  manufacturer: string;
  type: string;
  year: string;
  fuel: string;
  color: string;
  reg: string;
}
