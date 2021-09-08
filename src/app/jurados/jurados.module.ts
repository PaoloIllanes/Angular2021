import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jurados1Component } from './jurados1/jurados1.component';
import { ShredModule } from '../shred/shred.module';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {path: '', component: Jurados1Component},

]

@NgModule({
  imports: [
    CommonModule,
    ShredModule,
    RouterModule.forChild(routes),

  ],
  declarations: [
    Jurados1Component
  ]
})
export class JuradosModule { }