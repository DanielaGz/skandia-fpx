import { Component, OnInit } from '@angular/core';

/**
 * El componente HeaderComponent representa el encabezado de la aplicación.
 * Este componente se utiliza para mostrar el encabezado de la página.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /**
   * Constructor del componente HeaderComponent.
   * Este constructor se utiliza para inicializar cualquier dependencia necesaria.
   */
  constructor() { }

  /**
   * Método del ciclo de vida ngOnInit.
   * Se ejecuta después de que Angular haya inicializado las propiedades del componente.
   * En este método se pueden realizar tareas de inicialización adicionales si es necesario.
   */
  ngOnInit(): void {
  }

}
