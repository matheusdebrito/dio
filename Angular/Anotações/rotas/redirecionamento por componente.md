- Para fazer uma navegação a partir de um componente temos que usar a dependência router. Ex

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private activeRoute: ActivatedRoute, private router:Router) {
    this.activeRoute.firstChild?.params.subscribe( res => console.log(res))
    this.activeRoute.queryParams.subscribe( res => console.log(res))
  }

  ngOnInit(): void{
    setInterval(() => {
      this.router.navigate(['/'])
    }, 5000)
  }
}

- Injetamos a dependência no construtor e usamos o método navigate dentro da função setInterval para redirecionar para a página "/" depois de 5 segundos.

- Poderiamos adicionar o método navigate a uma função, por exemplo, e atribuir a função a um evento de click ou à uma validação.