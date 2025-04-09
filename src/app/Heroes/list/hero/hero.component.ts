import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public uchihas: string[] = ['Uchiha Madara','Uchiha Itachi','Uchiha Sasuke','Uchiha Shisui','Uchiha Kagami','Uchiha Obito'];

  public uchihaDeleted?: string = '' ;




  public condition: boolean = false;

  deleteLastUchiha(): void{

    this.uchihaDeleted = this.uchihas.pop();
    console.log(this.uchihas.length);
    this.condition = this.uchihas.length == 0;
  }

  resetList(): void{
    const original: string[]= ['Uchiha Madara','Uchiha Itachi','Uchiha Sasuke','Uchiha Shisui','Uchiha Kagami','Uchiha Obito'];
    this.uchihas = original;
  }
}
