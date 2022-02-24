import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Employee,EmployeeCostToCompany } from 'src/Shared/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl: string = 'http://localhost:7071/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

allEmployees() : Observable<EmployeeCostToCompany[]> {

  return this.http.get<EmployeeCostToCompany[]>(this.apiUrl+'Employees');
}

calculate(employee:Employee):any{
  const body=JSON.stringify(employee);
  console.log(body)
  console.log(this.apiUrl+'PayCalculation')
  return this.http.post(this.apiUrl+'PayCalculation', body,{'headers':this.headers}).pipe(
    catchError((err) => {
      console.log('error caught in service')
      console.error(err);

      //Handle the error here

      return throwError(err);    //Rethrow it back to component
    }));
}

saveemployee(employee:EmployeeCostToCompany):any{
  const body=JSON.stringify(employee);
  console.log(body)
  return this.http.post(this.apiUrl+'SaveEmployee', body,{'headers':this.headers}).pipe(
    catchError((err) => {
      console.log('error caught in service')
      console.error(err);

      //Handle the error here

      return throwError(err);    //Rethrow it back to component
    }));
}

}
