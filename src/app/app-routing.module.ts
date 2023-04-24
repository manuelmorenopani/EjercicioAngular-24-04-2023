import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1InterpoblacionComponent } from './componente1-interpoblacion/componente1-interpoblacion.component';
import { Componente2OnewaybindingComponent } from './componente2-onewaybinding/componente2-onewaybinding.component';
import { Componente3EventoComponent } from './componente3-evento/componente3-evento.component';
import { Componente4TwowaybindingComponent } from './componente4-twowaybinding/componente4-twowaybinding.component';
import { Componente5ServicioComponent } from './componente5-servicio/componente5-servicio.component';
import { Componente6RoutingComponent } from './componente6-routing/componente6-routing.component';
import { Componente7DirectivasComponent } from './componente7-directivas/componente7-directivas.component';
import { Componente8PasodeparametroComponent } from './componente8-pasodeparametro/componente8-pasodeparametro.component';
import { Componente8ReciboparametroComponent } from './componente8-reciboparametro/componente8-reciboparametro.component';
import { Componente9ReciboparametrosComponent } from './componente9-reciboparametros/componente9-reciboparametros.component';
import { Componente9PasodemasdeunparametroComponent } from './componente9-pasodemasdeunparametro/componente9-pasodemasdeunparametro.component';
import { AppComponent } from './app.component';
import { Componente11Padre1Component } from './componente11-padre1/componente11-padre1.component';
import { Componente12Padre2Component } from './componente12-padre2/componente12-padre2.component';

const routes: Routes = [
  {path:'Interpoblacion', component:Componente1InterpoblacionComponent},
  {path:'Oneway',component:Componente2OnewaybindingComponent},
  {path:'Evento',component:Componente3EventoComponent},
  {path:'Twoway',component:Componente4TwowaybindingComponent},
  {path:'Servicio',component:Componente5ServicioComponent},
  {path:'Directivas',component:Componente7DirectivasComponent},
  {path:'Pasoparametro',component:Componente8PasodeparametroComponent},
  {path:'Reciboparametro/:ids',component:Componente8ReciboparametroComponent},
  {path:'Pasomasparametros',component:Componente9PasodemasdeunparametroComponent},
  {path:'Recibomasparametro',component:Componente9ReciboparametrosComponent},
  {path:'Padre1',component:Componente11Padre1Component},
  {path:'Padre2',component:Componente12Padre2Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
