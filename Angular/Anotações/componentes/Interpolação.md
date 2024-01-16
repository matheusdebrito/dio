Podemos passar propriedades nas classes. Ex:

import { Component } from '@angular/core';

@Component({
  selector: 'new-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  buttonText: string = "ACESSAR"

}

passamos a propriedade buttonText através da classe. Podemos acessar essa propriedade através do arquivo HTML. Ex:

<div>
  <button>{{buttonText}}</button>
</div>
