import { Component } from '@angular/core';

@Component({
  selector: 'app-componente11-padre1',
  templateUrl: './componente11-padre1.component.html',
  styleUrls: ['./componente11-padre1.component.css']
})
export class Componente11Padre1Component {
  escribe:string=""
  nombre:string=""

  anadir(){
    this.nombre=this.escribe
   }
}
