import { Component } from '@angular/core';
import { numeros } from '../modelos/listanumeros';
@Component({
  selector: 'app-componente7-directivas',
  templateUrl: './componente7-directivas.component.html',
  styleUrls: ['./componente7-directivas.component.css']
})
export class Componente7DirectivasComponent {
  lista = Object.values(numeros)
  listanumeros:number=0
  alerta=false
  acierta:number=0
  
}

