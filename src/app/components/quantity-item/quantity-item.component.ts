import { Component, OnInit, Input} from '@angular/core';
import { QuantityService } from '../../Services/quantity.service';

import { Quantity } from 'src/app/Models/quantity';

@Component({
  selector: 'app-quantity-item',
  templateUrl: './quantity-item.component.html',
  styleUrls: ['./quantity-item.component.css']
})
export class QuantityItemComponent implements OnInit {

  // kcal:number;
  @Input() quantity:Quantity;

  constructor() { }

  ngOnInit(): void {
  //  console.log(this.quantity);
  
  }


}
