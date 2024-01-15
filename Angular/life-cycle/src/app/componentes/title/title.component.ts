import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string = ""

  constructor(){
    console.log("constructor")

  }

  ngOnInit(): void {
    console.log("OnInit")
    this.nome = `Ola, ${this.nome}`
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges")
  }
}
