import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { DemoComponent } from './demo/demo.component';
import {FormControl, FormArray, FormBuilder} from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';



@NgModule({
  declarations: [
    SampleComponent,
    DemoComponent
  ],
  imports: [
    CommonModule
    
   
  ],
  exports:[DemoComponent],


  providers:[]

})
export class MyModuleModule { }
