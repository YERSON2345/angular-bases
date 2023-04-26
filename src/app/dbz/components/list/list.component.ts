import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  //Para recibir información desde la clase padre (main-page.component)
  @Input()
  //Para poner en el *ngFor (characterList)
  public characterList: Character[] = [
    {
      id:"",
      name:"",
      power:0
    }
  ]
  //Para mandar información al padre (main-page.component)
  @Output()
  public onDeleteID: EventEmitter<string> = new EventEmitter();
  onDeleteCharacter(id:string):void{
    // TODO: Emitir el ID del personaje
    console.log({id})

    this.onDeleteID.emit(id);

  }

}
