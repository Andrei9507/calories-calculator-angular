import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../Services/product.service';

import { Product } from '../../Models/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:Product;
  @Output() deleteItem: EventEmitter<Product> = new EventEmitter();
  editableProduct=false ;

  constructor( private productService:ProductService) { }

  ngOnInit(): void {
  }

  editItem(){
    this.editableProduct=true;
  }

  updateItem(){
    this.editableProduct=false;
    // item.contentEditable = false;
    // this.editableProduct=true;
    // this.editedProduct= item.innerHTML;
    // product.name=item.innerHTML;
    console.log( this.product);
    this.productService.updateItem( this.product).subscribe(product =>
      this.product = product);
    // console.log(this.editedProduct);
  }

  deleteProduct(product){
    this.deleteItem.emit(product);
  }

}
