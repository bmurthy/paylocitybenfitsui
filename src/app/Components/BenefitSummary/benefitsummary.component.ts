import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/Service/employee.service';
import {NotificationService} from 'src/Service/notification.service';
import { Employee,Dependent,EmployeeCostToCompany} from 'src/Shared/Employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-benefitsummary',
  templateUrl: './benefitsummary.component.html',
  styleUrls: ['./benefitsummary.component.css']
})

export class BenefitSummaryComponent implements OnInit {
  registerForm: FormGroup;
  title = 'paylocityui';
  employee = new Employee();
  employeeCost = new EmployeeCostToCompany();
  relation1: string;
  relation2: string;
  relation3: string;
  relation4: string;
  //dependent = new Dependent[];


constructor(private employeeService: EmployeeService, private notificationService: NotificationService,private formBuilder: FormBuilder) { }
ngOnInit() {
  this.registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dependentName1:[''],
    dependentName2:[''],
    dependentName3:[''],
    dependentName4:['']
});
}
onChange(value: any){
  this.relation1 = value;
}
onChange1(value: any){
  this.relation2 = value;
}
onChange2(value: any){
  this.relation3 = value;
}
onChange3(value: any){
  this.relation4 = value;
}

Calculate(){
  if(this.registerForm.controls.firstName.value != '' && this.registerForm.controls.lastName.value != '')
  {
this.employee.firstName=this.registerForm.controls.firstName.value;
this.employee.lastName = this.registerForm.controls.lastName.value;
this.employee.dependents = [{name:this.registerForm.controls.dependentName1.value, relation: this.relation1},
  {name:this.registerForm.controls.dependentName2.value, relation : this.relation2},
  {name:this.registerForm.controls.dependentName3.value, relation : this.relation3},
  {name:this.registerForm.controls.dependentName4.value, relation : this.relation4}];
  
  this.employeeService.calculate(this.employee).subscribe((data:EmployeeCostToCompany) => {
    this.employeeCost = data;
    console.log(this.employeeCost);
  },(error:any) =>{
    
  this.notificationService.showError("Failed pay calculation","") });
  }
  else 
  {
    this.notificationService.showError("First name and Last name should not be empty.","");
  }
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
Save(){
  if(this.registerForm.controls.firstName.value != '' && this.registerForm.controls.lastName.value != '')
  {
  console.log(this.employeeCost);  
  this.employeeService.saveemployee(this.employeeCost).subscribe(() => {
    
      },(error:any) =>{
        this.registerForm.reset();
        this.employeeCost = new EmployeeCostToCompany();
        this.notificationService.showSuccess("Successfully added the ne employee.","");
        console.error('Save Failed');
       });
      }
      else 
      {
        this.notificationService.showError("First name and Last name should not be empty.","");
      }
}
}
