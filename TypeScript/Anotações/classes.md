---------------- Classes ----------------

class Character {
    name: string;
    strenght: number;
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

---------------- Modificadores de acesso ----------------

public -> a propriedade pode ser acessada livremente
private -> faz com que a propriedade só possa ser acessada de dentro da classe
protected -> faz com que a propriedade só possa ser acessada dentro da classe ou de sub classes

class Character2 {
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