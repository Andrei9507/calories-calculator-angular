import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Quantity } from '../Models/quantity';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class QuantityService {

  quantitiesUrl:string= 'http://localhost:8000/api/quantities';
  quantitiesHistoryUrl:string= 'http://localhost:8000/api/quantities-history';
  day:string;
  month:string;
  year:string;


  constructor(private http:HttpClient) { }


  
   // Get Quantity
   getQuantities():Observable<Quantity[]> {
    return this.http.get<Quantity[]>(`${this.quantitiesUrl}`);
  }

  
  // Add Quantity
  addQuantity(quantity:Quantity):Observable<Quantity> {
    console.log(quantity);
    return this.http.post<Quantity>(this.quantitiesUrl, quantity, httpOptions);
  }

  getHistoryCalories(myDate):Observable<Quantity[]>
  {

    // this.myHistoryDate= myDate;
    // console.log(myDate)
    const arr =  myDate.split("/");

    // console.log('date: ', arr[0]);
    // console.log('month: ', arr[1]);
    // console.log('year: ', arr[2]);

    this.day =arr[0];
    this.month =arr[1];
    this.year = arr[2];
    // console.log(myDate);
    // console.log(`${this.quantitiesHistoryUrl}/${this.day}/${this.month}/${this.year}`);
    return this.http.get<Quantity[]>(`${this.quantitiesHistoryUrl}/${this.day}/${this.month}/${this.year}`);
  }


}
