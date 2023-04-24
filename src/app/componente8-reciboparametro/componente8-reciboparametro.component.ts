import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-componente8-reciboparametro',
  templateUrl: './componente8-reciboparametro.component.html',
  styleUrls: ['./componente8-reciboparametro.component.css']
})
export class Componente8ReciboparametroComponent {
  ids : number = 0
  constructor(private activarrutas : ActivatedRoute){}

  ngOnInit(): void {
    this.ids = this.activarrutas.snapshot.params['ids']
    console.log(this.ids)
       
  }
}
