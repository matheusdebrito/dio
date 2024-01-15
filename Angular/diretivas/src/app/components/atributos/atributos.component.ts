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
