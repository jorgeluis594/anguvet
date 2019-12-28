import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../../../models/cliente.model';
import { ClientesService } from '../../../services/clientes/clientes.service';
@Component({
  selector: 'app-newcliente',
  templateUrl: './newcliente.component.html',
  styles: []
})
export class NewclienteComponent implements OnInit {

  form: FormGroup;

  constructor(
    public _clientesServices: ClientesService
  ) {

    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      dni: new FormControl('', [
                                Validators.required,
                                Validators.pattern(/^([0-9])*$/)]),
      telefono: new FormControl('', Validators.pattern(/^([0-9])*$/)),
      email: new FormControl('', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')),
      distrito: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      celular: new FormControl('', [Validators.required, Validators.pattern(/^([0-9])*$/)])
    });
  }

  ngOnInit() {
  }

  guardarCambios() {

    if (!this.form.valid) {
      return;
    }

    let cliente = new Cliente(
      this.form.value.nombre,
      this.form.value.dni,
      this.form.value.celular,
      this.form.value.distrito,
      this.form.value.direccion,
      this.form.value.telefono,
      this.form.value.email
    );

    this._clientesServices.crearCliente( cliente )
        .subscribe( resp => {
          console.log(resp);
        } );


    console.log(this.form);
  }

}
