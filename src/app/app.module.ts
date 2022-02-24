import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from '../Service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BenefitSummaryComponent } from './Components/BenefitSummary/benefitsummary.component';
import { EmployeesComponent } from './Components/EmployeeDetails/employeedetails.component';



@NgModule({
  declarations: [
    AppComponent,
    BenefitSummaryComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
