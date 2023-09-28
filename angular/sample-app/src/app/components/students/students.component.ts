import { Component } from '@angular/core';
import { StudentServiceService } from 'src/service/student-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  data:any[]=[];
  constructor(private obj:StudentServiceService) //dependency injection
  {
    this.data=this.obj.studentsRecords();
  }

}
