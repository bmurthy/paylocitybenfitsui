import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/Service/employee.service';
import {NotificationService} from 'src/Service/notification.service';
import { Employee,Dependent,EmployeeCostToCompany} from 'src/Shared/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paylocityui';

  constructor() { }



}
