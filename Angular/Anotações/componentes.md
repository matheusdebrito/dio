------------- Importando Componentes no Modo Standalone -------------

- Importar a classe exportada pelo componente. Ex:
    import { nome da classe } from 'caminho do arquivo do componente'
    import { MenuComponent } from './components/menu/menu.component'
- No componente adicionar o parâmetro imports: []. Ex:

    import { Teste } from './app/app.component';

    @Component({
    selector: 'app-root',
    standalone: true,
    imports: [Teste],
    template: `
        <teste></teste>
    `,
    })

--------------------------------------------------