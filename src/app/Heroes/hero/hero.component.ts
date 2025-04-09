import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html'
})
export class HeroesListComponent {

  public name: string = '';

  public random1: string = 'Naruto random1';

  public random2: string = 'Sasuke random2';

  public qty: string[] = ['1st', '2nd','3rd','4th'];

  public naruto: string[] = ['Rasengan', 'Shadow clone jutsu','Rasen shuriken','Odama Rasengan'];

  public sasuke: string[] = ['Chidori', 'Indra\'s Arrow','Mangekyou Sharingan','Chibaku Tensei'];

  public types: string[] = [];

  changeName(value: string): void{
    this.name = value;
    this.types = this.name == 'Naruto'? this.naruto : this.sasuke;
  }

  get upperName(): string{
    return this.name.toUpperCase();
  }

  getFirstJutsu():string{
    return this.types[0];
  }



}
