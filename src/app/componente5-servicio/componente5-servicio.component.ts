import { Component } from '@angular/core';
import { YService } from '../y.service';

@Component({
  selector: 'app-componente5-servicio',
  templateUrl: './componente5-servicio.component.html',
  styleUrls: ['./componente5-servicio.component.css']
})
export class Componente5ServicioComponent {
 
constructor(private servicio: YService){

}

boton(){
  this.servicio.imprimir()
}

}