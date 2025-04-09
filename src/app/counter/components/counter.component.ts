import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Componente counter funk</h1>

  <p>Counter: {{counter}}</p>

<button (click)="increase()">+1</button>

<button (click)="restartCounter()">Restart</button>

<button (click)="decrease()">-1</button>

<button class= 'hola' (click)="increaseBy(5)">+5</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 0;

  increase():void{
    this.counter += 1;
  }

  decrease():void{
    this.counter -= 1;
  }

  restartCounter(): void{
    this.counter = 0;
  }

  increaseBy(value: number): void{
    this.counter += value;
  }
}
