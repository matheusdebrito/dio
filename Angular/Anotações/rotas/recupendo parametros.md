{path: "portfolio/:id", component: CardComponent} o :id depos do / significa que será criada uma variável e tudo que for passado depois de portfólio será atribuído a id.

Depois definir a variável na roda temos que ir na classe do componente e definiar o método constructor.

constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.firstChild?.params.subscribe( res => console.log(res))
  }


--------------- QueryParams --------------------

- QueryParams são parâmetro passados pela url. Ex: http://localhost:4200/portfolio/1?name="matheus".
- Para recuperar esses parâmetros podemos usar: 

constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }