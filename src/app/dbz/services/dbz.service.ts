import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [{
    name: 'Goku',
    powerLevel: 9500,
    id: uuid()
  },
  {
    name: 'Vegeta',
    powerLevel: 10500,
    id: uuid()
  }
  ];

  onNewCharacter(character : Character): void {

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);

  }

  onDeleteCharacter(id: string):void{

     this.characters = this.characters.filter(item=> item.id !== id );

  }



}
