import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllclientesComponent } from './allclientes/allclientes.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CLIENTES_ROUTES } from './clientes.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewclienteComponent } from './newcliente/newcliente.component';
import { ClientesComponent } from './clientes.component';
import { MostrarclienteComponent } from './mostrarcliente/mostrarcliente.component';
import { AddpacienteComponent } from './addpaciente/addpaciente.component';
import { ComponentsModule } from '../../components/components.module';

// Componentes extras



@NgModule({
  declarations: [
    ClientesComponent,
    AllclientesComponent,
    NewclienteComponent,
    MostrarclienteComponent,
    AddpacienteComponent
  ],
  imports: [
    CLIENTES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ComponentsModule
  ],
  exports: [
  ]
})
export class ClientesModule { }
