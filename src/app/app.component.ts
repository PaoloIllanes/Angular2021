import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular2021';
}
//volver array y sumar
//{1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'}
const a = {1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'};
const b = Object.keys(a).map(n => parseInt(n)).reduce((acc, value) => {
  if(value % 2 === 0){
    acc = acc + value;
  } 
  return acc;
}, 0);
console.log(b)

//Filtrar impares mostrar como string
//[1,2,3,4,5,6]

console.log( [1,2,3,4,5,6].filter(s => s%2 !== 0).join('-'))
  
