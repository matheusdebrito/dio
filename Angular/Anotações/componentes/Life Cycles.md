-------------------- OnInit --------------------

- OnInit ciclo de vida quando o componente é criado.

- Adicionar OnInit no import. Ex: import { Component, OnInit } from '@angular/core';
- Adicionar OnInit na classe exportada. Ex:

    @Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrl: './title.component.css'
    })
    export class TitleComponent implements OnInit {

    nome: string = "Matheus"

    constructor(){

    }

    ngOnInit(): void {
        console.log("Ola, eu sou o nascimento do title component")
        this.nome = `Ola, ${this.nome}`
    }
    }

-> HTML: <p>{{ nome }}</p>


------------------------------------------------------------

----------------------------OnChanges-----------------------

- OnChanges executa o bloco de código quando o componente sofre alguma mudança, por exemplo, quando o componente recebe um valor passado pelo componente pai.

- É necessário importar o OnChanges da mesma forma que importa o OnInit

ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges")
  }

------------------------------------------------------------

-------------------------DoCheck-----------------------------
- Executa um bloco de código quando uma propriedade do componente é verificada. Possui 4 sub eventos.

- ngAfterContentInit() executa o bloco de código depois que o componente é iniciado.

- ngAfterContentChecked() executa o bloco de código quando o componente é verificado.

- ngAfterViewInit() executa o bloco de código quando o componente é totalmente carregado.

- ngAfterViewsChecked() executa o bloco de código depois que a visualização do componente é verificada.

- ORDEM DO DoCheck: checked -> content -> view

------------------------------------------------------------

--------------------------OnDestroy-------------------------

- Executa um bloco de código quando um componente é destruído.

------------------------------------------------------------