import { Component } from '@angular/core';

@Component({
  selector: 'app-componente12-padre2',
  templateUrl: './componente12-padre2.component.html',
  styleUrls: ['./componente12-padre2.component.css']
})
export class Componente12Padre2Component {
  nombres:string="";
  constructor(){
  }

  ngOnInit(): void{
  
  }
  anadir(nombre:string){
      this.nombres=nombre
      

  }
}
