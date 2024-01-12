Passar parametros de um componente pai para um componente filho.

- Ir no componente pai e definir o parametro na exportação da classe. Ex:

    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
    })
    export class AppComponent {
    title = 'my-app';
    label: string = 'CARRINHO';
    label2: string = 'RECARREGAR';
    }


- Ir no html do componente pai e definir o parametro na tag. Ex:

    <new-button [label] = "label"></new-button>
    <new-button [label] = "label2"></new-button>

- Ir no componente filho e definiar o parametro através da exportação da classe. Ex:

    @Component({
    selector: 'new-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.css'
    })
    export class ButtonComponent {
    buttonText: string = "ACESSAR"
    @Input() label: string = ""

    }

- Ir no html do componente filho e defininir o parametro. Ex:

<button>{{label}}</button>


--------- OBSERVAÇÃO -------------

Podemos reaproveitar o componente e usar mais de um parâmetro apenas adicionando o parâmetro no componente pai.

Podemos adicionar valores dinâmicos ao componete apenas tirando o [] da propriedade. Ex: 

<new-button label = "Valor Dinâmico"></new-button>

Ainda assim precisamos declarar o parâmetro no componente.