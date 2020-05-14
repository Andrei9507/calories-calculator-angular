import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ProductService } from '../../Services/product.service';

import { Product } from '../../Models/product';

@Component({
  selector: 'app-add-quantity',
  templateUrl: './add-quantity.component.html',
  styleUrls: ['./add-quantity.component.css']
})
export class AddQuantityComponent implements OnInit {

  @Output() addQuantity: EventEmitter<any> = new EventEmitter();

  product_id:number;
  quantity:number;
  kcal:number;

  products: Product[];
  product: Product;
  
  enableQuantityMark=true;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    
    this.productService.getProducts().subscribe(products =>
      {
        this.products = products;
      })
  }

  onSubmit() {
    
    const quantity = {
      product_id: this.product.id,
      quantity:this.quantity,
      kcal: this.kcal,
     
        
    }
   

    this.addQuantity.emit(quantity);
    
    this.product_id=null;
    this.kcal=null;
    this.quantity=null; 
  }

  getCalories(event)
  {
    this.kcal=this.product.kcal*event/100;
    console.log(event);
  }

  enableQuantity()
  {
    this.enableQuantityMark=false;
  }
}
