import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //Decorador para mandar información al PADRE(main-page-component)
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:'',
    power: 0
  };

  // Metodo para agarrar el objeto que se ingrese en el formulario en el submit del formulario
  emitCharacter(){

    // El debugger sirve para detener la ejecución del código y consultar el comportamineto de la aplicación
    // Utilizarlo para probar en vez de usar mucho en console.log

    //debugger;
    console.log(this.character)
    // Validación para que no deje mandar valores vacios
    if( this.character.name.length === 0 ) return;

    //mandar los datos
    this.onNewCharacter.emit(this.character)

    // Dos formar de hacer lo mismo
    // this.character.name= "";
    // this.character.power= 0;

    this.character ={name:"", power: 0}
  }

}
