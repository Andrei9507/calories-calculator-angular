import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../Models/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  productsUrl:string = 'http://localhost:8000/api/products';

  constructor(private http:HttpClient) { }


   // Get Products
  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsUrl}`);
  }
   // Add Product
   addProduct(product:Product):Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, httpOptions);
  }

  updateItem(product:Product):Observable<any> {
    
    const url = `${this.productsUrl}/${product.id}`;
    console.log(url);
    return this.http.put(url, product, httpOptions);
  }

    // Delete Todo
    deleteItem(product:Product):Observable<Product> {

      const url = `${this.productsUrl}/${product.id}`;

      return this.http.delete<Product>(url, httpOptions);
    }

  


}
