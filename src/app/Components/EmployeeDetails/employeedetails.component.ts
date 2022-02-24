import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/Service/employee.service';
import {NotificationService} from 'src/Service/notification.service';
import { Employee,Dependent,EmployeeCostToCompany} from 'src/Shared/Employee';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeCosts:EmployeeCostToCompany[];
  constructor(private employeeService: EmployeeService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.employeeService.allEmployees().subscribe((data:EmployeeCostToCompany[]) =>{
      this.employeeCosts = data;
      console.log(data);
      ;
    });

   
  }

}
