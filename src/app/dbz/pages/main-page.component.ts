import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //Utilizamos la interfaz "Character" para tener de referencia en los atributos

  public characters: Character[] = [{
    name:"Krillin",
    power:1000
  },
  {
    name:"Goku",
    power:9500
  },
  {
    name:"Vegeta",
    power:7500
  }];

  onNewCharacter(character:Character):void{
    //Para agregarlo en el array de ultimo si quiere de primero utlizar "unshift" en vez de push
    this.characters.push(character);

    // console.log("MainPage")
    // console.log(character)
  }

  onDeleteCharacter(index:number){
    this.characters.splice(index , 1)
  }
}
