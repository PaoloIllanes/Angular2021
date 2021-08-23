import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedStylesheetJitUrl } from '@angular/compiler/src/compile_metadata';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
   
  ],
  declarations: [
    Admin1Component,
    Admin2Component

  ]
})
export class AdminModule { }