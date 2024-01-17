- Podemos definir rotas filhas. Ex:

{path:"portfolio", component: CardComponent, children: [
    {path: ":id", component: CardComponent},
  ]}