import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'life-cycle';
  isAliveCheckSample:boolean = true;

  disposeCheckSample(){
    this.isAliveCheckSample = false;
  }
}
