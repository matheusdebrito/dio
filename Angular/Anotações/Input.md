- As propriedades de um componente podem ser definidas pelo componente pai. Do mesmo jeito que a tag img tem o atributo src o nosso componente pode ter atributos.

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.component.responsive.css']
})
export class BigCardComponent {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = "TITULO"
  @Input()
  cardDescription:string = "DESCRIÇÃO"

  constructor(){}
}

- No elemento pai usamos

<app-big-card photoCover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTGUFUPs1xpgBwZsWNX18TOFpJFC67j7uGw&usqp=CAU" cardTitle="Título" cardDescription="Descrição"></app-big-card>