import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';
import { ExponentPipe } from './exponent.pipe';
import { PurePipe } from './pure.pipe';
import { ImpurePipe } from './impure.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    LoaderComponent,
    ExponentPipe,
    PurePipe,
    ImpurePipe
  ]
  ,
  exports:[
    CardComponent,
    LoaderComponent,
    ExponentPipe,
    PurePipe,
    ImpurePipe
  ]
})
export class SharedModule { }