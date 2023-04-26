import { Injectable } from '@angular/core';
//Dependecia para el ID muy util
//npm i uuid
//npm i --save-dev @types/uuid
import { v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

    //Utilizamos la interfaz "Character" para tener de referencia en los atributos
    public characters: Character[] = [{
      id:uuid(),
      name:"Krillin",
      power:1000
    },
    {
      id:uuid(),
      name:"Goku",
      power:9500
    },
    {
      id:uuid(),
      name:"Vegeta",
      power:7500
    }];

    addCharacter(character:Character):void{

      const newCharacter: Character ={
        // con el ...character toma todas las propiedades de la interfaz sin necesidad de escribirlas 1 x 1
        ...character
      }

      //Para agregarlo en el array de ultimo si quiere de primero utlizar "unshift" en vez de push
      this.characters.push(newCharacter);

      // console.log("MainPage")
      // console.log(character)
    }

    // onDeleteCharacter(index:number){
    //   this.characters.splice(index , 1)
    // }

    //Filtrar para que traiga todos menos el que coincida con el ID
    deleteCharacterById(id:string){
      this.characters = this.characters.filter(character => character.id !== id);
    }
}
