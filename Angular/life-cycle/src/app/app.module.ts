import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './componentes/title/title.component';
import { CheckSampleComponent } from './componentes/check-sample/check-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CheckSampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
