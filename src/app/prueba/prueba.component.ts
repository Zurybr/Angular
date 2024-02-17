import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SignalComponent } from '../signal/signal.component';
@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [SignalComponent],
  template: `
    <p (click)="handleChange('nombre')">
      prueba works!
      {{nombre}}
    </p>
    <app-signal></app-signal>
  `,
  styles: ``
})
export class PruebaComponent {

 @Input() nombre: string ;
 @Output () nombreChange:EventEmitter<string> = new EventEmitter<string>();
  constructor() { 
    this.nombre = '';
  }
  handleChange(nombre:string){
    this.nombreChange.emit("nombre");
  }
  
}
