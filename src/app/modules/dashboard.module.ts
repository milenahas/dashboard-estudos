import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
import { CursosEmAndamentoComponent } from './components/cursos-em-andamento/cursos-em-andamento.component';
import { ProximosCursosComponent } from './components/proximos-cursos/proximos-cursos.component';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CursosEmAndamentoComponent,
    ProximosCursosComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    NgApexchartsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
