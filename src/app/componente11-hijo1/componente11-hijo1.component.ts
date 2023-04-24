import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente11-hijo1',
  templateUrl: './componente11-hijo1.component.html',
  styleUrls: ['./componente11-hijo1.component.css']
})
export class Componente11Hijo1Component {
  @Input() nombres: string= "";
}
