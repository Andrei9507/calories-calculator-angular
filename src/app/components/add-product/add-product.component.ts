import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() addProduct: EventEmitter<any> = new EventEmitter();

  name:string;
  kcal:number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    const product = {
      name: this.name,
      kcal: this.kcal
    }

    this.addProduct.emit(product);
    
    this.name='';
    this.kcal=null;

  }


}
