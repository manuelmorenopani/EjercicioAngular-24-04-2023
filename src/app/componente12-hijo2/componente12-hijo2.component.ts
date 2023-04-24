import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente12-hijo2',
  templateUrl: './componente12-hijo2.component.html',
  styleUrls: ['./componente12-hijo2.component.css']
})
export class Componente12Hijo2Component {
  nombre:string=""
  
  @Output() enviardatos = new EventEmitter <string>();
  ngOnInit(){
   

  }
anadir(){
  this.enviardatos.emit(this.nombre)
}
}


