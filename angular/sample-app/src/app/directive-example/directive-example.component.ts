import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent {

  status:boolean=false;
  a:number=100;
  colors:string[]=["red","blue","green","black","violet"];
  users:any[]=[
    {'name':'Raman', age:22},
    {'name':'Kumar', age:23},
    {'name':'Nidhi', age:21},
    {'name':'Sumita', age:24},
  ];

  switchvar:number=3;
  bgcolor:string="yellow";
  color:string="purple";
  font:string="20px";
}
