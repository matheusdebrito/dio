---------------- Módulos ----------------
- Podemos ter módulos dentro de módulos.
- Os componentes devem ser importados com import { nomeComponente } from './caminhoComponente/componente' e declarados em declarations
- Os modulos devem ser importados com import { nomeModulo } from './caminhoModulo/modulo' e declarados em imports
- para criar um módulo podemos usar o comando: ng g m nomeDoModulo



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { nomeComponente } from './caminhoComponente/componente'

@NgModule({
    declarations: [
        nomeComponente,
    ],
    imports: [
        NgModule,
        BrowserModule
    ],
    exports: [],
    providers: [],
    bootstrap: []
})

-----------------------------------------