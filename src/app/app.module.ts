import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SingletonService } from './login/services/singleton.service';
import { PagesModule } from './pages/pages.module';



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
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule
  ],
  providers: [SingletonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
