- Para declarar rotas no site, temos que editar o arquivo app-routing.modules 

- Importamos as classes dos componentes.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

- Definimos os caminhos da url e qual classe de componente vai renderizar.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

- Modulo completo.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
  
    path:'content/:id', --> o /:id faz com que seja obrigatório passar um /id para acessar a rota
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


- Podemos usar [routerLink]="" ao invés de href="".

<div class="big_card_title">
    <h1><a [routerLink]="['content', id]">{{ cardTitle }}</a></h1>
  </div>

- Código que atribui content/id sendo id uma variável que foi definida no componente app-big-card.