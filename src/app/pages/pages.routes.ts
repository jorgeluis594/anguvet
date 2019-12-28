import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NewclienteComponent } from './clientes/newcliente/newcliente.component';
import { MostrarclienteComponent } from './clientes/mostrarcliente/mostrarcliente.component';
import { AllclientesComponent } from './clientes/allclientes/allclientes.component';



const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'clientes', component: ClientesComponent, children: [
        { path: '', component: AllclientesComponent }
      ] },
      // { path: 'newcliente', component: NewclienteComponent},
      // { path: 'mostrarcliente', component: MostrarclienteComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
