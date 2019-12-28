import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllclientesComponent } from './allclientes/allclientes.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CLIENTES_ROUTES } from './clientes.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewclienteComponent } from './newcliente/newcliente.component';
import { ClientesComponent } from './clientes.component';



@NgModule({
  declarations: [
    ClientesComponent,
    AllclientesComponent,
    NewclienteComponent
  ],
  imports: [
    SharedModule,
   // CLIENTES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    ClientesComponent,
    AllclientesComponent,
    NewclienteComponent
  ]
})
export class ClientesModule { }
