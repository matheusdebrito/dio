function addNumber (x:number, y:number): number {
    return x + y
}

function addToHello(name: string): string {
    return `Hello ${name}`
}

function callToPhone(phone: number | string): number | string {
    return phone;
}

async function getDatabase(id: number): Promise<string> {
    return "felipe";
}

let soma: number = addNumber(4,2)

console.log(addToHello("Matheus"))
console.log(soma)

console.log(callToPhone("21964878569"))

