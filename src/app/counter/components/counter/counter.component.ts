
import { Component } from '@angular/core';

//Definir el componente y la eqtiqueta para utilizar el componenete en el HTML
//a-component para crear el componente rapido


@Component({
  selector: 'app-counter',
  //ALT + 96 para ``
  template: `
    <h1>Counter: {{ counter }}</h1>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resestCounter()">Reset</button>
  <button (click)="decreaseBy(1)">-1</button>`
})

export class CounterComponent{
  public counter: number= 10;
  
  //Función para aumentar 1 al presionar un boton
  increaseBy(value:number):void{
    this.counter +=value;
  }
  //Función para disminuir 1 al presionar un boton
  decreaseBy(value:number):void{
    this.counter -=value;
  }
  //Función para resetear a 10 al presionar un boton
    resestCounter():void{
    this.counter =10;
  }

}



