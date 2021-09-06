import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';






@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
  
    RouterModule.forRoot(routes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
