import { Component } from '@angular/core';

@Component({
  selector: 'app-text-case',
  templateUrl: './text-case.component.html',
  styleUrls: ['./text-case.component.scss']
})
export class TextCaseComponent {

title = 'text-case';
   
  value!: string;
  change(value: string) {
    this.value = value;
  }

}
