import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2-onewaybinding',
  templateUrl: './componente2-onewaybinding.component.html',
  styleUrls: ['./componente2-onewaybinding.component.css']
})
export class Componente2OnewaybindingComponent {
  aceptar:boolean=true

    ngOnInit(){}
    cambiar(){
    this.aceptar=!this.aceptar
  }

}
