- Usamos: private service:PokemonService.
- OBS: Private faz com que só exista dentro do componente e PokemonService é o nome da classe exportada pelo service.
- Para injetar um service pokemos passa-lo no método construtor, por exemplo. Ex:

import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  name:string = "Charizard"
  attributTypes:string[] = ['fire', 'rock']

  constructor(private service:PokemonService){

  }

}