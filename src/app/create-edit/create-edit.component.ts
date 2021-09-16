import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {

  constructor(private transaction: TransactionService) { 


  }

  ngOnInit() {
  }

  createTrans(form:any){
    
    let today = new Date().toLocaleDateString()
    this.transaction.create({
      date:  today,
      form: form.value.from,
      to: form.value.to,
      quentity: form.value.quentity,
      moneyType: form.value.moneyType,
      mineType: form.value.mineType,
      miner: form.value.miner



    })


  }
 

  editTrans(form:any){
    if(form.value.id!=null){
    this.transaction.update(form.value.id,{
      form: form.value.from,
      to: form.value.to,
      quentity: form.value.quentity,
      moneyType: form.value.moneyType,
      mineType: form.value.mineType,
      miner: form.value.miner



    })
  }else{console.log("unable to edit without id")}

  }
  
}