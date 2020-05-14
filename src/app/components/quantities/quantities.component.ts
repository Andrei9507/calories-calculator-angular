import { Component, OnInit } from '@angular/core';
import { QuantityService } from '../../Services/quantity.service';
import { Quantity } from '../../Models/quantity';

// import { ProductService } from '../../Services/product.service';

// import { Product } from '../../Models/product';
@Component({
  selector: 'app-quantities',
  templateUrl: './quantities.component.html',
  styleUrls: ['./quantities.component.css']
})
export class QuantitiesComponent implements OnInit {

  quantities:Quantity[];
  quantity:Quantity;
  total:number=0;
  kcal:number;
  
  i = 0;
  constructor(
    private quantityService:QuantityService,
   
  ) { }

  ngOnInit(): void {
    this.quantityService.getQuantities().subscribe(quantities =>
      {
        this.quantities = quantities;

        for (let qty of  quantities ){
         
          this.total=this.total + qty.kcal;
          console.log(this.total)
        }
      });
     
      
  }

  addQuantity(quantity:Quantity) {

    this.quantityService.addQuantity(quantity).subscribe(quantity => {
      this.quantities.push(quantity);
    });
    
    this.total=this.total+quantity.kcal;
  }

 getDailyCalories()
 {
  
 }

}
