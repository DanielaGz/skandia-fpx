import { Component, OnInit } from '@angular/core';

/**
 * El componente FooterComponent representa el pie de página de la aplicación.
 * Este componente se utiliza para mostrar el pie de página de la página.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  /**
   * Constructor del componente FooterComponent.
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
