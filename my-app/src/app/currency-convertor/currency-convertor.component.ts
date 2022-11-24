import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.scss']
})
export class CurrencyConvertorComponent {

  from?: string;
  to?: string;
  output?: number;
  onFrom(val: string) {
    this.from = val;
  }

  onTo(val: string) {
    this.to = val;
  }

  convert(val: number) 
  {
      if (this.from == "INR" && this.to == "USD") 
      {
        this.output = val / 82;
      }

      if (this.from == "INR" && this.to == "AED") 
      {
        this.output = val * 0.04 ;
      }

      if (this.from == "USD" && this.to == "INR") 
      {
        this.output = val * 82;
      }

      if (this.from == "USD" && this.to == "AED") 
      {
        this.output = val * 3.67;
      }

      if (this.from == "AED" && this.to == "INR") 
      {
        this.output = val / 0.04;
      }

      if (this.from == "AED" && this.to == "USD") 
      {
        this.output = val / 3.67;
      }

      if (this.from == "USD" && this.to == "USD") 
      {
        this.output = val;
      }

      if (this.from == "AED" && this.to == "AED") 
      {
        this.output = val;
      }

      if (this.from == "INR" && this.to == "INR") 
      {
        this.output = val;
      }
       
}

}
