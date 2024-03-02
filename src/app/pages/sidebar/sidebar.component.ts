import { Component, OnInit } from '@angular/core';

/**
 * El componente SidebarComponent es responsable de la barra lateral de la aplicación.
 * Este componente controla el estado de apertura y cierre de la barra lateral y gestiona su comportamiento.
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  /**
   * Indica si la barra lateral está abierta o cerrada.
   * Este atributo controla el estado de apertura y cierre de la barra lateral.
   */
  public open: boolean = false;

  /**
   * Constructor del componente SidebarComponent.
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
   * Método para cambiar el estado de la barra lateral.
   * Cambia el valor del atributo `open` para abrir o cerrar la barra lateral.
   */
  openSideBar(){
    this.open = !this.open;
  }

}
