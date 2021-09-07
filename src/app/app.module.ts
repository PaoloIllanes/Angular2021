import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { PublicationService } from './services/publication.service';






@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [PublicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
