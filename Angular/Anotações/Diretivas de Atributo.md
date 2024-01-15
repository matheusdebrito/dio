-------------------- NgClass --------------------
- Define uma classe para o componente.
- Define como classe o valor atribuido a variável estilo.

import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrl: './atributos.component.css'
})
export class AtributosComponent {
  estilo:string = "enable"

  constructor(){

  }
}

<p [ngClass]="estilo">atributos works!</p>

-------------------------------------------------

-------------------- NgStyle --------------------

import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrl: './atributos.component.css'
})
export class AtributosComponent {
  estilo:string = "enable"
  corFundo:string = "red"

  constructor(){

  }
}

<h1 [ngStyle]="{'background': corFundo}">Curso Angular</h1>

--------------------------------------------------

-------------------- NgModel --------------------
- Importar o módulo no arquivo module.

import { FormsModule } from '@angular/forms'

- Adicionar em imports.

imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

- Ao digitar algo no input e clicar no botão, adicionar o item digitado em um array e cria um <li> para cada item do array.

import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrl: './atributos.component.css'
})
export class AtributosComponent {
  estilo:string = "enable"
  corFundo:string = "red"
  item:string = ""
  listaDeCompras: string[] = []

  constructor(){

  }

  adicionarItem(x:string){
    this.listaDeCompras.push(x)
  }
}

<h1>Lista de Compras</h1>
<input type="text" [(ngModel)]="item" placeholder="Item para comprar">
<button (click)="adicionarItem(item)">Adicionar</button>
<ul>
  <li *ngFor="let p of listaDeCompras">{{ p }}</li>
</ul>


-------------------------------------------------