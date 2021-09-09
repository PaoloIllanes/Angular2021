import { Injectable } from '@angular/core';

@Injectable()
export class NormalService {

  private data=[1,2,3,4,5]

  contructor(){}

  
  public getData(): number[]{
    return this.data
  }
  public setData(data:number[]){
    this.data=data;
  }
}