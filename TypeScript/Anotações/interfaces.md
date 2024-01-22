---------------- Tipos ----------------
Geralmente usado para tipar uma variável e garantir que ela sempre receba as mesmas propriedades

type robot = {
    id: numer;
    name: string;
};

const bot: robot = {
    id: 1,
    name: "megaman",
}

------------------------------------------------

---------------- Interface ----------------
Geralmente usado para trabalhar com classes

interface robot2 {
    id: number | string;
    name: string;
}

Podemos usar o parametro readonly para não permitir alteração de uma propriedade

Ex:
    interface robot3 {
        readonly id: number | string;
        name: string;
    }


--------------------------------

---------------- Utilizando interface nas classes ----------------

class Pessoa implements robot2 {
    id: string | number
    name: string

    constructor(id, name) {
        this.id = id;
        this.name = name
    } 
}

const p = new Pessoa(1, "matheus")