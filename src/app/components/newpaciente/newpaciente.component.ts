import { Component, OnInit, Pipe } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from '../../services/service.index';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-newpaciente',
  templateUrl: './newpaciente.component.html',
  styles: []
})
export class NewpacienteComponent implements OnInit {

  formpaciente = new FormGroup({
    cliente: new FormControl('', Validators.required)
  });
  opcion: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor( public _clientesServices: ClientesService ) {
  }

  ngOnInit() {
    this.formpaciente.controls.cliente.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    ).subscribe();
  }
  pinpin() {
    console.log(this.formpaciente);
    console.log(this.filteredOptions);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.opcion.filter(option => {console.log(option); option.toLowerCase().includes(filterValue); });
  }
}






