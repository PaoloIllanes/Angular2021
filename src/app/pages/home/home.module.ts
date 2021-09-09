import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes=[
  {path: '' , component: HomeComponent}
  
  ]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }