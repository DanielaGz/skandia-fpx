import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';


/**
 * Este es el módulo shared de la aplicación.
 * Contiene la configuración y los componentes compartidos por toda la aplicación.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    HttpClient
  ]
})
export class SharedModule { }
