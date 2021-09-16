import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateEditComponent } from './create-edit/create-edit.component';
import { TransactionService } from './services/transaction.service';
import { WalletService } from './services/wallet.service';
import { TransactionComponent } from './transaction/transaction.component';
import { WalletComponent } from './wallet/wallet.component';




@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    TransactionComponent,
    CreateEditComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    
  
  
  ],
  providers: [ 
    TransactionService,
    WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
