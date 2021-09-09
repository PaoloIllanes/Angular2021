import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NormalService } from './services/normal.service';
import { PublicationService } from './services/publication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes=[
  {path: '' , component: LoginComponent}
  
  ]

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    
  ],
  providers: [
    NormalService,
    PublicationService,
   
   
      
  ]
})
export class LoginModule { }