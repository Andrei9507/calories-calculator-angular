import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common'

import { QuantityService } from '../../Services/quantity.service';
import { Quantity } from '../../Models/quantity';

@Component({
  selector: 'app-history-quantity',
  templateUrl: './history-quantity.component.html',
  styleUrls: ['./history-quantity.component.css']
})
export class HistoryQuantityComponent implements OnInit {

  quantities:Quantity[];
  myHistoryDate : Date;
  myHistoryFormattedDate:string;
  enableListing = false;
  total:number=0;
  
  colorTheme = 'theme-dark-blue';
 
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    public datepipe: DatePipe,
    private quantityService:QuantityService
  ) { }

  ngOnInit(): void {
    //config theme for datepicker
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
   
  }

  getHistoryDate()
  {
    this.total=null;
    this.enableListing = true;

    this.myHistoryFormattedDate = this.datepipe.transform(this.myHistoryDate, 'dd/MM/yyyy');
    
    this.quantityService.getHistoryCalories(this.myHistoryFormattedDate)
    .subscribe(quantities =>
      {
        this.quantities = quantities;

        for (let qty of  quantities ){
         
          this.total=this.total + qty.kcal;
         
        }
      });


  }

}
