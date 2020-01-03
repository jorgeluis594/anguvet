import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../services/service.index';
import { Cliente } from '../../../models/cliente.model';

@Component({
  selector: 'app-allclientes',
  templateUrl: './allclientes.component.html',
  styles: []
})
export class AllclientesComponent implements OnInit {

  clientes: any[];

  constructor( public _clientesServices: ClientesService) {
  }
  ngOnInit() {
    this._clientesServices.showCliente(12)
        .subscribe( (data: any) => {this.clientes = data.clientes;
        console.log(this.clientes);} );
  }

}
