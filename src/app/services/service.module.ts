import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, ClientesService } from './service.index';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  providers: [
    SidebarService,
    ClientesService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
