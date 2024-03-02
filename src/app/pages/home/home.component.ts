import { Component, OnInit } from '@angular/core';

/**
 * El componente HomeComponent es responsable de la página principal de la aplicación.
 * Este componente controla la lógica y la vista de la página de inicio.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Indica si la sección está abierta o cerrada.
   * Este atributo controla el estado de apertura y cierre de la sección.
   */
  public open: boolean = false;

  /**
   * Constructor del componente HomeComponent.
   * Este constructor se utiliza para inicializar cualquier dependencia necesaria.
   */
  constructor() { }

  /**
   * Método del ciclo de vida ngOnInit.
   * Se ejecuta después de que Angular haya inicializado las propiedades del componente.
   */
  ngOnInit(): void {
  }

  /**
   * Método para abrir la sección.
   * Cambia el valor del atributo `open` a true para abrir la sección.
   */
  openSection(){
    this.open = true;
  }
}
