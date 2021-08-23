import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client1Module } from './client1/client1.module';
import { Client2Module } from './client2/client2.module';
import { Shared0Module } from 'src/app/shared0/shared0.module';
import { ProviderModule } from '../provider/provider.module';

@NgModule({
  imports: [
    CommonModule,
    Shared0Module,
    ProviderModule
  ],
  declarations: [
    Client1Module,
    Client2Module
  ],
  exports:[
    Client1Module,
    Client2Module
  ]
})
export class ClientModule { }