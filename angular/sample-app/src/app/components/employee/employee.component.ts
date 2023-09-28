import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeId:any;
  deptId:any;
 
  constructor(private route:ActivatedRoute)  //dependency injection
  {
    this.employeeId=route.snapshot.params['id'];
    this.deptId=route.snapshot.paramMap.get('deptid');
   
  }

}
