import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NormalService } from './services/normal.service';

const routes: Routes=[
  {path: '' , component: LoginComponent}
  
  ]

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    
  ],
  providers: [
    NormalService
   
      
  ]
})
export class LoginModule { }