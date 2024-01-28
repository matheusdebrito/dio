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

-----------------------NgTemplate--------------------------
- Bloco de código que por padrão vem desativado. Pode ser ativado com ngIf="true". Ex:

<ng-template [ngIf]="true">
  <p>ngtemplate</p>
</ng-template>


-----------------------------------------------------------

----------------------NgContent---------------------------
- Cria um elemento para ser usado pelo componente pai dentro do componente filho.

- ao criar <ng-content selector="tag"></ng-content> onde tag é o nome que será utilizado no componente pai.

- No componente pai quando invocar o componente filho podemos usar o elementro criado pelo ng content.

componente filho, com seletor <app-div></app-div>, arquivo HTML:

<p></p>
<ng-content selector="conteudo"></ng-content>
<p></p>

componente pai, arquivo HTML:

<app-div>
  <conteudo></conteudo>
</app-div>



-----------------------------------------------------------