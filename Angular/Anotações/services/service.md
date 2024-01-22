- Os arquivos services tem o papel de requisitar dados externos e depois distribuir para os componentes.

- comando para criar um service: ng g s services/serviceName. Ex: ng g s services/pokemon.

- Anatomia de um service.

- @Injectable -> significa que podemos injetar esse service nos componentes
- prodedIn: 'root' -> significa que todos na raiz do projeto tem acesso ao service. Poderia definir outra pasta do projeto e somente os componetes dentro dessa determinada pasta poderiam injetar o service.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
}