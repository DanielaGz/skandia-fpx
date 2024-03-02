import { Component, OnInit } from '@angular/core';

/**
 * El componente PagesComponent es responsable de la vista principal de las páginas de la aplicación.
 * Este componente se utiliza para la disposición general de las páginas y la gestión de la navegación entre ellas.
 */
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  /**
   * Constructor del componente PagesComponent.
   * Este constructor se utiliza para inicializar cualquier dependencia necesaria.
   */
  constructor() { }

  /**
   * Método del ciclo de vida ngOnInit.
   * Se ejecuta después de que Angular haya inicializado las propiedades del componente.
   * Se utiliza para realizar inicializaciones adicionales del componente.
   */
  ngOnInit(): void {
  }

}
