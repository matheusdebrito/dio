import { query } from '@angular/animations';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{
  teste:any = ""

  constructor(){}

  ngOnInit(): void {
    let appRoot = document.querySelector("app-root")
    this.teste = appRoot?.querySelector("app-title")
    console.log(this.teste)
  }

}