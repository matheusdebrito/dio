---------------- Sub classes ----------------
Utilizando o parametro extends podemos fazer uma subclasse. Ex:

---------------- classe ----------------

class Character {
    private name: string;
    protected strenght: number;
    skill: number;

    constructor(name: string, strenght:number, skill: number){
        this.name = name;
        this.strenght = strenght;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.strenght} points`)
    }
}

------------------------------------------------

---------------- Sub Classe ----------------
Sub classes tem acesso as propriedades da classe pai.
Sub classes precisam ter o método super() dentro de seu constructor e com os mesmos parâmetros do constructor da classe pai.
Sub classes podem ter propriedades que a classe pai não possui

class Magician extends Character {
    magicPoints: number;

    constructor(name: string, strenght:number, skill: number, magicPoints: number;){
        super(name, strenght, skill)
        this.magicPoints = magicPoints
    }
}