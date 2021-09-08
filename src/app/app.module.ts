import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LugarComponent } from './lugar/lugar.component';




const routes : Routes =[
  {path:'',redirectTo:'jurados',pathMatch:'full'},
  {path:'jurados',loadChildren: () => import('./jurados/jurados.module').then(m=>m.JuradosModule)},
  {path:'votacion',loadChildren: () => import('./votacion/votacion.module').then(m=>m.VotacionModule)},

]

@NgModule({
  declarations: [
    AppComponent,
    LugarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
