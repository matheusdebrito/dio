import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy{

  quantidade: number = 0

  constructor() {}

  adicionar(){
    this.quantidade += 1
  }

  decrementar(){
    this.quantidade -= 1
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngOnDestroy(): void {
    console.log("Good Bye, My Friend");
  }

}
