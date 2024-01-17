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

  // ngOnInit(): void{
  //   setInterval(() => {
  //     this.router.navigate(['/'])
  //   }, 5000)
  // }
}
