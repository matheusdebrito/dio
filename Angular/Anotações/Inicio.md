---------------------- Instalação ----------------------

- npm install -g @angular/cli -> instala o angular
- Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -> Executar no windows powershell para permitir execução de scripts.
- ng new my-app --no-standalone --routing --ssr=false -> cria do modo antigo com modulos.
- ng new my-app -> cria um novo projeto com o nome my-app cria com o modo atual de standalone components.
- ng serve --open -> Executa o servidor do projeto. Tem que ser executado dentro da pasta do projeto.

--------------------------------------------------------

---------------------- Criando Componentes ----------------------

- ng generate component components/<component-name> ou ng g c components/<component-name> -> Cria um componente no caminho components/ se a pasta components não existir, será criada.

-----------------------------------------------------------------

