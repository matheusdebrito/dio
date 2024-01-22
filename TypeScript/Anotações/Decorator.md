Ir no arquivo tsconfig.json e e habilitar a opção experimentalDecorators

--------------- Class Decorator ---------------

Para decorar uma função podemos usar o @. Ex:

function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version})
    }
}

@apiVersion("1.10")
class Api{}

const api = new Api();
console.log(api.__version)

---------------------------------------------

--------------- Attribute Decorator ---------------

Atribui à uma função a class minLength que verificar se o nome da classe é maior que 3.

function minLength(length: number){
    return(target: any, key: string) =>{
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`)
            } else {
                _value = value;
            }
        }

        Object.defineProperty(target, key, {
            get:getter,
            set:setter,
        })
    }
}

class Api{
    @minLength(3)
    name: string

    constructor(name: string){
        this.name = name;
    } 
}

const api = new Api("Produtos");

console.log(api.name)