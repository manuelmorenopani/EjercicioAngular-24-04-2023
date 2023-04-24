import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1InterpoblacionComponent } from './componente1-interpoblacion/componente1-interpoblacion.component';
import { Componente2OnewaybindingComponent } from './componente2-onewaybinding/componente2-onewaybinding.component';
import { Componente3EventoComponent } from './componente3-evento/componente3-evento.component';
import { Componente5ServicioComponent } from './componente5-servicio/componente5-servicio.component';
import { Componente6RoutingComponent } from './componente6-routing/componente6-routing.component';
import { Componente7DirectivasComponent } from './componente7-directivas/componente7-directivas.component';
import { Componente8PasodeparametroComponent } from './componente8-pasodeparametro/componente8-pasodeparametro.component';
import { Componente9PasodemasdeunparametroComponent } from './componente9-pasodemasdeunparametro/componente9-pasodemasdeunparametro.component';
import { Componente10ComppletarroutingComponent } from './componente10-comppletarrouting/componente10-comppletarrouting.component';
import { Componente4TwowaybindingComponent } from './componente4-twowaybinding/componente4-twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { Componente8ReciboparametroComponent } from './componente8-reciboparametro/componente8-reciboparametro.component';
import { Componente9ReciboparametrosComponent } from './componente9-reciboparametros/componente9-reciboparametros.component';
import { Componente11Hijo1Component } from './componente11-hijo1/componente11-hijo1.component';
import { Componente11Padre1Component } from './componente11-padre1/componente11-padre1.component';
import { Componente12Padre2Component } from './componente12-padre2/componente12-padre2.component';
import { Componente12Hijo2Component } from './componente12-hijo2/componente12-hijo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1InterpoblacionComponent,
    Componente2OnewaybindingComponent,
    Componente3EventoComponent,
    Componente4TwowaybindingComponent,
    Componente5ServicioComponent,
    Componente6RoutingComponent,
    Componente7DirectivasComponent,
    Componente8PasodeparametroComponent,
    Componente9PasodemasdeunparametroComponent,
    Componente10ComppletarroutingComponent,
    Componente8ReciboparametroComponent,
    Componente9ReciboparametrosComponent,
    Componente11Hijo1Component,
    Componente11Padre1Component,
    Componente12Padre2Component,
    Componente12Hijo2Component
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
