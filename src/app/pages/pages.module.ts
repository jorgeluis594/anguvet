import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { VisitasComponent } from './visitas/visitas.component';
import { CitasComponent } from './citas/citas.component';
import { TurnosComponent } from './turnos/turnos.component';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';
import { InternacionesComponent } from './internaciones/internaciones.component';
import { GroomerComponent } from './groomer/groomer.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { NewclienteComponent } from './clientes/newcliente/newcliente.component';
import { CommonModule } from '@angular/common';
import { MostrarclienteComponent } from './clientes/mostrarcliente/mostrarcliente.component';
import { ClientesModule } from './clientes/clientes.module';
import { AllclientesComponent } from './clientes/allclientes/allclientes.component';


@NgModule({
  declarations: [
    DashboardComponent,
    // ClientesComponent,
    PacientesComponent,
    VisitasComponent,
    CitasComponent,
    TurnosComponent,
    MonitoreoComponent,
    InternacionesComponent,
    GroomerComponent,
    PagesComponent,
    ClientesComponent,
    AllclientesComponent
    // NewclienteComponent,
    // MostrarclienteComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    //ClientesModule
  ],
  exports: [
    DashboardComponent,
    // ClientesComponent,
    PacientesComponent,
    VisitasComponent,
    CitasComponent,
    TurnosComponent,
    MonitoreoComponent,
    InternacionesComponent,
    GroomerComponent,
    PagesComponent
  ]
})
export class PagesModule { }

