-------------------------- Diretivas --------------------------
- Diretivas são as maneiras como o angular manipula e altera o DOM dinâmicamente.
----------------------------------------------------------------

-------------------------- Diretivas de Atributo --------------------------
- Alteram a aparência ou comportamento de um elemento, componente ou outra diretiva

    - ngClass -> Adiciona ou remove um conjunto de classes CSS.
    - ngStyle -> Adiciona ou remove um conjunto de estilos ao HTML.
    - ngModel -> Adiciona vinculação de dados bidirecional a um elemento de um formulário.

----------------------------------------------------------------------------

-------------------------- Diretivas Estruturais --------------------------
- Moldam ou remodelam a estrutura da DOM, adicionando ou removendo elementos da tela.

    - ngIf -> condicinal que verifica se modelo deve ser visualizado ou não.
    - ngFor -> repete um elemento para cada item da lista
    - ngSwitch -> Utilizado para alternar entre comportamentos alternativos.

----------------------------------------------------------------------------

-------------------------- NgTemplate --------------------------
- Com o ngIf podemos usa também o ngTemplate

<app-card *ngIf="true; else blocoSecreto"></app-card>

<ng-template #blocoSecreto>
  <p>bloco secreto</p>
</ng-template>

- No código a cima se a condição for true, o componete app-card> será exibido, porém, se for false, o componente dentro do <ng-tempalte> será exibido.
----------------------------------------------------------------


--------------------------NgFor--------------------------

- Cria um <li> para item em produtos
- Adiciona a função adicionar() ao botao e ao clicar atualiza a lista.
- Adiciona a função remover() ao <li> e ao clicar no <li> o mesmo é removido. 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  produtos: string[] = []

  constructor(){
    this.produtos = ['mouse', 'teclado', 'cabo', 'fonte']
  }

  ngOnInit(){

  }

  adicionar(){
    this.produtos.push("Matheus")
  }

  remover(index: number){
    this.produtos.splice(index, 1)
  }
}

<p>card works!</p>

<button (click)="adicionar()">Adicionar</button>
<ul>
  <li *ngFor="let p of produtos; let i = index"
  (click)="remover(i)"
  >
    {{ i }} - {{ p }}
  </li>
</ul>

- Podemos adicionar um index ao ngFor. Ex: 

<ul>
  <li *ngFor="let p of produtos; let i = index">{{ p }}</li>
</ul>
---------------------------------------------------------


--------------------------NgSwitchCase--------------------------
- Define qual bloco de código sera executado de acordo com a variável menuType. ngSwitchDefault é executado por padrão caso a variável não atenda a nenhuma das outras definições.



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  produtos: string[] = []
  menuType: string = ""

  constructor(){
    this.produtos = ['mouse', 'teclado', 'cabo', 'fonte']
  }

  ngOnInit(){

  }

  adicionar(){
    this.produtos.push("Matheus")
  }

  remover(index: number){
    this.produtos.splice(index, 1)
  }
}


<div [ngSwitch]="menuType">
  <div *ngSwitchDefault>
    <ul>
      <li>Editar Perfil</li>
      <li>Adicionar Cartão</li>
    </ul>
  </div>

  <div *ngSwitchCase="'admin'">
    <ul>
      <li>Editar Perfil</li>
      <li>Adicionar Cartão</li>
      <li>Gerenciar Usuários</li>
    </ul>
  </div>

  <div *ngSwitchCase="'superUser'">
    <ul>
      <li>Editar Perfil</li>
      <li>Adicionar Cartão</li>
      <li>Gerenciar Usuários</li>
      <li>Gerenciar Admins</li>
    </ul>
  </div>

</div>

----------------------------------------------------------------