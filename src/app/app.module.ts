import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PersonasComponent } from './personas/personas.component';


@NgModule({
  declarations: [
    AppComponent,
   PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
