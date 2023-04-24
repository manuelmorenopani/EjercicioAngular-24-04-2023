import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3-evento',
  templateUrl: './componente3-evento.component.html',
  styleUrls: ['./componente3-evento.component.css']
})
export class Componente3EventoComponent {
  sw : boolean = false
  cad = ""
    cambiartexto(){
      this.sw = !this.sw
      this.llamada()
    }
    llamada(){
      if(this.sw){
        this.cad = "hola"
      }else{
        this.cad = "adios"
      }     
    }

}
