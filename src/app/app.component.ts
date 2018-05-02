import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selectValue: String = 'cars';

  driverData = {
    name: '',
    job: '',
    email: '',
    address: 'Budapest'
  };

  driversData: any;

  carData = {
    manufacturer: 'Skoda',
    type: '',
    year: '',
    fuel: '',
    color: '',
    reg: ''
  };

  httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    )
  };

  carsData: any;

  constructor(public http: HttpClient) {
    this.getAllCars();
    this.getAllUsers();
  }

  createCar() {
    this.carData.reg = this.carData.reg.toLocaleUpperCase();
    this.http.post(`http://localhost:3333/api/car`, this.carData, this.httpOptions)
      .subscribe((data) => this.getAllCars());
  }

  createUser() {
    const inputs = Array.from(document.querySelectorAll('.div-new-user input'));
    let valid = true;
    console.log(inputs);
    inputs.forEach(obj => {
      if (obj.classList.contains('ng-invalid')) {
        valid = false;
      }
    });

    if (valid === true) {
      console.log('OK');
      this.http.post(`http://localhost:3333/api/user`, this.driverData, this.httpOptions)
        .subscribe((data) => this.getAllUsers());
      for (const k in this.driverData) {
        if (k) {
        this.driverData[k] = '';
        }
      }
    } else {
      window.alert('Hibás adatok');
    }

  }

  getAllCars() {
    this.http.get(`http://localhost:3333/api/car`).subscribe(
      (data) => {
      this.carsData = data;
        console.log(this.carsData);
      });
  }

  getAllUsers() {
    this.http.get(`http://localhost:3333/api/user`).subscribe(
      (data) => {
      this.driversData = data;
        console.log(this.driversData);
      });
  }

  delete(id, table) {
    if (confirm('Biztosan törli?')) {
      this.http.delete(`http://localhost:3333/api/${table}/` + id)
        .subscribe((data) => {
          if (table === 'user') {
            this.getAllUsers();
          } else if (table === 'car') {
            this.getAllCars();
          }
        });
    }
  }

  updateCar(car) {
    this.http.put('http://localhost:3333/api/car/' + car._id, car)
      .subscribe(() => this.getAllCars());
  }
  updateUser(user) {
    this.http.put('http://localhost:3333/api/car/' + user._id, user)
      .subscribe(() => this.getAllUsers());
  }

}
