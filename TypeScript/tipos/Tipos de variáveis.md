--------- Tipos primitivos: ---------
    boolean
    number
    string

declarando: let ligado:boolean = false;
            let nome:string = "Matheus";
            let idade:number = 30; (aceita números inteiro e fracionados)

--------- Tipos especiais: ---------
    null
    undefined

--------- Tipos abrangentes: ---------
    any (qualquer coisa)
    void (vazio)

--------- Tipo objeto: ---------
    object (recebe apenas objeto)

declarando objeto sem previzibilidade:
    let pessoa: object = {
        nome: "matheus",
        idade: 24,
    }

declarando objeto previzivel:
    type pessoa = {
        nome: string;       (cria um tipo de objeto para padronizar)
        idade: number;
    }

    matheus:pessoa = {      (atribui o tipo pessoa ao objeto)
        nome: "matheus",
        idade: 24
    }

--------- Arrays ---------
    let dados:string =  [] (define que o array só pode receber strings)

    let infos: (string | number)[] (cria um array que aceita string e number)

--------- Tuplas ---------

    let boleto:[string, number, number] = [] (é semelhante ao array com múltiplos tipos porém é obrigatório seguir a ordem e quantidade 
    dos tipos definidos)


--------- Datas ---------

    let aniversario:Date = new Date("2022-12-01 05:00")
    