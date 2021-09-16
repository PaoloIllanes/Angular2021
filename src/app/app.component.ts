
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TransactionService } from './services/transaction.service';
import { WalletService } from './services/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  wallets: any[] = [];
  transactions: any[] = []

  constructor(private walletService: WalletService,
              private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.loadWallets();
    this.loadTransactions();
  }
  /*5. Cuando se hace click en mine se debe adicionar y restar el monto según al tipo de moneda y aumentar o reducir a la 
  dirección de wallet correspondiente (utilizar método PUT or PATCH para actualizar la wallet, y DELETE para eliminar la 
  transaccion)*/
  onMine(transaction: any): void {
    const walletFROM = this.wallets.find(w => w.wallet === transaction.from);
    const walletTO = this.wallets.find(w => w.wallet === transaction.to);

    walletFROM[transaction.moneyType] = walletFROM[transaction.moneyType] - transaction.quantity;
    walletTO[transaction.moneyType] = walletTO[transaction.moneyType] + transaction.quantity;

    this.transactionService.delete(transaction.id).subscribe(() => this.loadTransactions());
    this.walletService.update(walletFROM.id, walletFROM).subscribe(res => this.loadWallets());
    this.walletService.update(walletTO.id, walletTO).subscribe(res => this.loadWallets());



  }

  getTransactionsStatus(): boolean {
    const aux = this.transactions.filter(t => t.mineType === 'PoS' && t.miner < 20);
    return this.transactions.length === aux.length;
  }

  getTotalCoin(type: string): number {
    return this.wallets.reduce((acc, value) => acc + (value[type] > 0 ? value[type] : 0), 0);
  }
//1. Listar las transacciones y las billeteras (utilizar método GET)
  loadTransactions(): void {
    this.transactionService.getAll().subscribe(res =>
      this.transactions = Object.entries(res).map((s: any) => ({id: s[0], ...s[1]}))
    );
  }
  loadWallets(): void {
    this.walletService.getAll().subscribe(res =>
      this.wallets = Object.entries(res).map((s: any) => ({id: s[0], ...s[1]}))
    );
  }

  
  }

  

  