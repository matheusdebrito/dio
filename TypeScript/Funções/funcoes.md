com TS podemos tipar os parâmetros e as funções

--------------- Funções ---------------

function addNumber (x:number, y:number): number {
    return x + y
}

function addToHello(name: string): string {
    return `Hello ${name}`
}

let soma: number = addNumber(4,2)

console.log(addToHello("Matheus"))
console.log(soma)

--------------- Funções Multi Tipos ---------------

function callToPhone(phone: number | string): number | string {        (o | signifca ou)
    return phone;
}

--------------- Funções Assíncronas ---------------

SEMPRE QUE USAR FUNÇÕES ASSINCRONAS DECLARAR O TIPO PROMISE

async function getDatabase(id: number): Promise<string> {
    return "felipe";
}
