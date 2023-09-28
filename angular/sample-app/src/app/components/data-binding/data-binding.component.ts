import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  title:any="Welcome to data binding";
  color:any="red";
  pathOfImage="assets/flowers-19830_640.jpg";
  status:any=false;
  content:any="This is a paragraph.";
  h:any="400px";
  w:any="400px";

  greet():any
  {
    return "Good Morning";
  }

  addition(a:any, b:any) :any
  {
    return a+b;
  }

  clickFunction():void
  {
    alert('inside clickFunction method');
  }

  text:any="";
  getContent()
  {
    this.text="This is a sample text.";
  }

  clickCount:any=0;
  clickMe()
  {
    this.clickCount=this.clickCount+1;
  }


  
}
