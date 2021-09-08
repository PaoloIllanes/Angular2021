import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Votacion1Component } from './votacion1/votacion1.component';
import { ShredModule } from '../shred/shred.module';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes =[

  {path: '', component: Votacion1Component},

]


@NgModule({
  imports: [
    CommonModule,    
    ShredModule,
    RouterModule.forChild(routes),
  ],
  declarations: [Votacion1Component]
})
export class VotacionModule { }