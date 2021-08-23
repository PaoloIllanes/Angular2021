import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Directive1Directive } from './directive1.directive';
import { Directive2Directive } from './directive2.directive';


@NgModule({
  declarations: [
    AppComponent,
    Directive1Directive,
    Directive2Directive
  ],
  imports: [
    BrowserModule,
    FormsModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
