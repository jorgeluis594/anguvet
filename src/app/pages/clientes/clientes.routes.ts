import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes.component';
// import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ClientesComponent } from './clientes/clientes.component';
// import { NewclienteComponent } from './clientes/newcliente/newcliente.component';
// import { MostrarclienteComponent } from './clientes/mostrarcliente/mostrarcliente.component';
import { AllclientesComponent } from './allclientes/allclientes.component';
import { NewclienteComponent } from './newcliente/newcliente.component';



const clientesRoutes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent,
    children: [
      { path: '', component: AllclientesComponent },
      { path: 'newcliente', component: NewclienteComponent}
    ]
  }
  // {
  //   path: '',
  //   component: PagesComponent,
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'clientes', component: ClientesComponent },
  //     { path: 'newcliente', component: NewclienteComponent},
  //     { path: 'mostrarcliente', component: MostrarclienteComponent},
  //     { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  //   ]
  // }
];

export const CLIENTES_ROUTES = RouterModule.forChild( clientesRoutes );
