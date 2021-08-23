import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1Module } from './product1/product1.module';
import { Product2Module } from './product2/product2.module';
import { Shared0Module } from 'src/app/shared0/shared0.module';

@NgModule({
  imports: [
    CommonModule,
    Shared0Module
  ],
  declarations: [
    Product1Module,
    Product2Module
  ],exports:[
    Product1Module,
    Product2Module
  ]
})
export class ProductModule { }