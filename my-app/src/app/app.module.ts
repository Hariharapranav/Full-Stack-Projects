import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageFilterComponent } from './image-filter/image-filter.component';
import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';
import { TextCaseComponent } from './text-case/text-case.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ImageFilterComponent,
    CurrencyConvertorComponent,
    TextCaseComponent,
    DateTimeComponent,
    CalculatorComponent,
    RegistrationFormComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
