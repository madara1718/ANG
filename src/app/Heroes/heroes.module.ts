import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./list/hero/hero.component";
import { HeroesListComponent } from "./hero/hero.component";


@NgModule({

  declarations: [
    HeroComponent,
    HeroesListComponent

  ],
  exports:[
    HeroComponent,
    HeroesListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule { }
