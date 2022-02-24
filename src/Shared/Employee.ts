

export class Employee {

    employeeId: number;
    firstName: string;
    lastName: string;
    dependents: Dependent[];
}

export class Dependent {
  name: string;
  relation: string;
}

export class EmployeeCostToCompany {
  employeeId: number;
  firstName: string;
  lastName: string;
  dependentName1: string;
  dependentName2: string;
  dependentName3: string;
  dependentName4: string;
  relation1: string;
  relation2: string;
  relation3: string;
  relation4: string;
  salary: number;
  benefits: number;
  costToCompany: number;
}
