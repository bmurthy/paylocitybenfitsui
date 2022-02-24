import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefitSummaryComponent } from './Components/BenefitSummary/benefitsummary.component';
import { EmployeesComponent } from './Components/EmployeeDetails/employeedetails.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'SalaryCalculation',
    pathMatch: 'full'
  },
  { path: 'SalaryCalculation', component: BenefitSummaryComponent },
  { path: 'EmployeeDetails', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
