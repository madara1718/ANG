import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList: Character[] = [
    // {
    //   name: 'Trunks',
    //   powerLevel: 20000
    // },
    // {
    //   name: 'Gohan',
    //   powerLevel: 30000
    // }
  ];


  deleteCharacter(id: string): void {

    if(!id){
      alert('Este Id no existe');
      return;
    }

    this.onDelete.emit(id);



  }


}
