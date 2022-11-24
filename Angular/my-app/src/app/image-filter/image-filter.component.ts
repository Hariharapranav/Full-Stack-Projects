import { Component } from '@angular/core';

@Component({
  selector: 'app-image-filter',
  templateUrl: './image-filter.component.html',
  styleUrls: ['./image-filter.component.scss']
})
export class ImageFilterComponent {
  title = 'my-app';
  var1?:string;
  out?:string;

  display(val:string)
  {
    this.var1=val;
    if(this.var1 == "Apple")
    {
      this.out="assets/apple.png";
    }
    if(this.var1 == "Banana")
    {
      this.out="assets/banana.png";
    }
    if(this.var1 == "Cherry")
    {
      this.out="assets/cherry.png";
    }
    if(this.var1 == "Dates")
    {
      this.out="assets/dates.png";
    }
  }

}
