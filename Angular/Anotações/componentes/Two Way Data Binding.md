import { Component } from '@angular/core';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrl: './entry-data.component.css'
})
export class EntryDataComponent {
  placeholder: string = "email"
}

---------------------------------------------

<input type="text" [value]="placeholder" (input)="placeholder = $any($event.target).value">
<p>{{ placeholder }}</p>

------ usando ngModel ------

<input type="text" [(ngModel)]="placepass">
<p>{{ placepass }}</p>
