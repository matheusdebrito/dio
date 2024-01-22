- Declaramos a função na classe que será exportada.

import { Component, Input } from '@angular/core';

@Component({
  selector: 'new-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = "";


  getAlert(){
    console.log(this.label)
    console.log("teste")
  }
}


- Adicionamos o evento entre () e o nome da função em ="".

<button (click)="getAlert()">{{label}}</button>