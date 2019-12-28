import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { URL_SERVICIOS } from '../../configs/config';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    public http: HttpClient
  ) { }

  crearCliente( cliente: Cliente) {

    let url = URL_SERVICIOS + '/clientes';
    console.log(cliente);
    return this.http.post( url, cliente );
  }
}
