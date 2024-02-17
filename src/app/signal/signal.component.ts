import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  template: `
    <p (mouseover)="changeModifica()" (click)="actuallizaModifica()">
      {{modifica()}}
    </p>
  `,
  styles: ``
})
export class SignalComponent {
  modifica = signal("hola") ;
  changeModifica(){
    this.modifica.set("adios");
  }
  actuallizaModifica(){
    this.modifica.update((prevState)=>prevState+" mundo");
  }
}
