import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewpacienteComponent } from './newpaciente/newpaciente.component';

// material angular
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    NewpacienteComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    NewpacienteComponent
  ]
})
export class ComponentsModule { }
