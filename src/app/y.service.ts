import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YService {
texto="Hola mundo"
  constructor() { }

  imprimir(){
    alert(this.texto)
  }
}
