import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';

import { Product } from '../../Models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products =>
      {
        this.products = products;
      })
  }

  addProduct(product:Product) {
    this.productService.addProduct(product).subscribe(product => {
      this.products.push(product);
    });
  }

  deleteItem(product:Product) {
    // Remove From UI
    this.products = this.products.filter(t => t.id !== product.id);
    // Remove from server
    this.productService.deleteItem(product).subscribe();
  }

}
