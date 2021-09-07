import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SingletonService } from './login/services/singleton.service';



const routes : Routes =[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)},
  {path:'pages',loadChildren: () => import('./pages/pages.module').then(m=>m.PagesModule)},

]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [SingletonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
