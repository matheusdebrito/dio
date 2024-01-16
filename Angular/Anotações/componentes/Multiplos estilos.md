- Podemos passar mais de um arquivo de estilo para um componente, o que é muito útil para, por exemplo, ter um arquivo para cada largura de tela.

- Declaramos styleUrls: ['./small-card.component.css', './small-card.component.responsive.css'] no componente. Ex:

import { Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.component.responsive.css']
})
export class SmallCardComponent {

}