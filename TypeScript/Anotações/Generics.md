-------------- Generics --------------
Generics serve para deixar a tipagem dinamica usando <T> no lugar do tipo conforme o exemplo abaixo.

function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3]);
const stgArray = concatArray<string[]>(["matheus", "de brito"], ["salim"]);
