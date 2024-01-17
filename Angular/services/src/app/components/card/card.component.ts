import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  pokemon:PokemonData = {
    id:0,
    name:"",
    sprites:{front_default: ""},
    types: [{
      slot: 0,
      type: {
        name: "",
        url: ""
      }
    }]
  }

  constructor(private service:PokemonService){

  }

  ngOnInit(){
    this.getPokemon("pikachu")
  }

  getPokemon(searchName: string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
          console.log(this.pokemon)
        },
        error: (err) => console.log(err)
      }
    )
  }
}
