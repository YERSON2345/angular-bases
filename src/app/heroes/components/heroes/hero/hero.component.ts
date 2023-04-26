import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

  public name: string = "iron man";
  public age:  number = 27;

  //Metodo GET para capitalizar texto (ASD)
  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  //Metodo para concatenar 2 variables
   getHeroDescription():string{

    return `${ this.name} - ${this.age}`
  }
  //Cambiar el valor de una variable desde un metodo
  //para asginar a un boton cuando se hace clic
  changeHero():void{
    this.name = "Spiderman"

  }
  //Cambiar el valor de una variable desde un metodo
  //para asginar a un boton cuando se hace clic
  changeAge():void{
    this.age = 20
  }
  resetHero():void{
    this.name = "iron man"
    this.age = 27
  }
}
