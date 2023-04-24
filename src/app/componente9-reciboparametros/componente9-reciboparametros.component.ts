import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-componente9-reciboparametros',
  templateUrl: './componente9-reciboparametros.component.html',
  styleUrls: ['./componente9-reciboparametros.component.css']
})
export class Componente9ReciboparametrosComponent {
  ids : number = 0
  nombre: string = ""
  constructor(private activarrutas : ActivatedRoute){}

  ngOnInit(): void {
    this.ids = this.activarrutas.snapshot.queryParams['ids']
    this.nombre = this.activarrutas.snapshot.queryParams['nombre']
    console.log(this.ids, this.nombre)
       
  }
}

