import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/heroes/hero/hero.component";
import { ListComponent } from "./components/heroes/list/list.component";


@NgModule({

  declarations:[
    HeroComponent,
    ListComponent
  ],

  exports:[
    HeroComponent,
    ListComponent
  ],
//Al momento de crear los modulos por cada componente, por favor tener en cuenta las importaciones
//para que se aplicquen localmente si no, no va funcionar correctamente
//hacer esto para cada uno de los modulos de los componenetes si da algun error

//En este caso no funcionaban los *ng if, *ng else, *ng for, etc...
imports:[
  CommonModule
]
})
export class HeroesModule{

}
