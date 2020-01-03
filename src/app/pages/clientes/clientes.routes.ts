import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { AllclientesComponent } from './allclientes/allclientes.component';
import { NewclienteComponent } from './newcliente/newcliente.component';
import { MostrarclienteComponent } from './mostrarcliente/mostrarcliente.component';
import { AddpacienteComponent } from './addpaciente/addpaciente.component';



const clientesRoutes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent,
    children: [
      { path: '', component: AllclientesComponent },
      { path: 'new', component: NewclienteComponent},
      { path: 'show/:id', component: MostrarclienteComponent},
      { path: 'agregar_mascota', component: AddpacienteComponent},
    ]
  }
];

export const CLIENTES_ROUTES = RouterModule.forChild( clientesRoutes );
