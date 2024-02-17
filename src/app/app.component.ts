import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PruebaComponent],
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
    <app-prueba (nombreChange)="test($event)" [nombre]="'Juan'"></app-prueba>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  test(event:string){
    console.log('event', event);
  }
}
