const routes: Routes = [
  {
    path: "",
    component: TitleComponent,
    pathMatch: 'full'
  }
];

path -> caminho para a rota. Ex: path="/noticias"
component -> componente exibido nessa rota
pathMacth -> pode receber full (exige que a rota seja exatamente igual ao definido no path)