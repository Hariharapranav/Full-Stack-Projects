import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { EmployeeComponent } from './employee/employee.component';
import { ImageFilterComponent } from './image-filter/image-filter.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TextCaseComponent } from './text-case/text-case.component';

const routes: Routes = [
 {
  path: 'calc',
  component: CalculatorComponent
 },
 {
  path: 'currency',
  component: CurrencyConvertorComponent
 },
 {
  path: 'date',
  component: DateTimeComponent
 },
 {
  path: 'image',
  component: ImageFilterComponent
 },
 {
  path: 'text',
  component: TextCaseComponent
 },
 {
  path: 'form',
  component: RegistrationFormComponent
 },
 {
  path: 'springboot',
  component: EmployeeComponent
 }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
