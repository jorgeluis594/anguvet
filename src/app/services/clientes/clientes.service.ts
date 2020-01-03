import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { URL_SERVICIOS } from '../../configs/config';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = URL_SERVICIOS + '/clientes';

  constructor(
    public http: HttpClient
  ) { }

  crearCliente( cliente: Cliente) {

    return this.http.post( this.url, cliente );
  }

  showCliente( id?: number ) {
    if (id) {
      return this.http.get( this.url );
    } else {
      console.log('dass');
    }
  }

  clientexnombre(nombre: string) {
    return this.http.get( `${this.url}/nombre/${nombre}`);
  }
}
