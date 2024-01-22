- Importar o módulo HTTP: import { HttpClientModule } from '@angular/common/http';
- Adicionar o módulo HTTP no imports do module.ts

imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ]

- O módulo HTTP nos permite ter acesso à funções como GET, PUT, DELETE, etc...

- Para utilizar o módulo HTTP nós precisamos ir no arquivo service que irá usa-lo e declarar o módulo no constructor.

constructor(private http:HttpClient) {
    this.http.get(url)
  }

- Na função que for usar o http temos que tipa-la como observable. Ex: 
  getPokemon(pokemonName:string):Observable<PokemonData>{
      this.pokeData = this.http.get<PokemonData>(`${this.baseUrl}${pokemonName}`)
      console.log(this.pokeData)
    }

- OBS: PokemonData é um modelo que foi importador da pasta models (pasta criada manualmente e criado arquivo pokemonData.ts)
- Ao utilizar o observable é obrigatório passar um type dentro de <>. Neste caso eu criei o type em um arquivo dentro da pasta models e exportei. É necessário importar o modelo com o import.

- OBS: depois do .get é necessário adicionar <> com o mesmo tipo do Observable.

- OBS: pokeData é uma variável que foi declarada na classe do componente. private pokeData: any


- Module.ts completo

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

- Arquivo de exportação de tipo:

export type PokemonData = {
  name: string
  id: number
  sprites: {front_default:string}
  types: string[]
}

