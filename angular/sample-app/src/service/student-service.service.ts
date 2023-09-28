import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  students:any[] =[];
  
  constructor() { }

  studentsRecords():any
  {
    this.students=[
                   {'name':'Kumar', 'class':'X', 'city':'Mumbai'},
                   {'name':'Sohini', 'class':'X', 'city':'Chennai'},
                   {'name':'Anil', 'class':'X', 'city':'Kolkata'}                 
  ];

   return this.students;
  }
}
