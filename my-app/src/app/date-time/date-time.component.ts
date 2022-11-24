import { Component } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent {

  private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private date = new Date();

  public hour: any;
  public minute!: string;
  public second!: string;
  public ampm!: string;
  public day!: string;
  public date1!: string;

  Date1: Date = new Date();

  constructor() { }

  ngOnInit(): void {

    setInterval(()=>{
      const date = new Date;
      this.updatetoDate(date);
    }, 1000);

    this.day = this.daysArray[this.date.getDay()]; 
  }

  private updatetoDate(date : Date){
     const hours = date.getHours();

     this.ampm = hours >= 12 ? 'PM' : 'AM';

     this.hour = hours % 12;
     this.hour = this.hour ? this.hour : 12;

     this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
    
     const minutes = date.getMinutes();
     this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

     const seconds = date.getSeconds();
     this.second = seconds < 10 ? '0' + seconds : seconds.toString();

  }

}
