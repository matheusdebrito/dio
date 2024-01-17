- No service podemos importar dados de outros arquivos, como o environment, por exemplo.
- Para importar os dados precisamos primeiro importar o arquivo: import { environment } from '../environment/environment';
- Depois de importar o arquivo, podemos associar os dados do arquivo para uma variável.
- Declaramos uma variável privada -> private baseUrl: string = ""
- Associamos os dados para ela -> 
    constructor() {
        this.baseUrl = environment.pokeApi
    }

    