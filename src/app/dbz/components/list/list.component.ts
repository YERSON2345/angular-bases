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
      name:"Trunks",
      power:10
    }
  ]
  //Para mandar información al padre (main-page.component)
  @Output()
  public onDeleteID: EventEmitter<number> = new EventEmitter();
  onDeleteCharacter(index:number):void{
    // TODO: Emitir el ID del personaje
    console.log({index})

    this.onDeleteID.emit(index);

  }

}
