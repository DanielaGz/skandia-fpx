import { Component, OnInit } from '@angular/core';

/**
 * El componente CardRecomendedComponent muestra una tarjeta para un producto recomendado.
 * Este componente se encarga de la lógica y la vista de una tarjeta de producto recomendado.
 */
@Component({
  selector: 'app-card-recommended',
  templateUrl: './card-recommended.component.html',
  styleUrls: ['./card-recommended.component.css']
})
export class CardRecomendedComponent implements OnInit {

  /**
   * Constructor del componente CardRecomendedComponent.
   * Este constructor se utiliza para inicializar cualquier dependencia necesaria.
   */
  constructor() { }

  /**
   * Método del ciclo de vida ngOnInit.
   * Se ejecuta después de que Angular haya inicializado las propiedades del componente.
   */
  ngOnInit(): void {
  }

}
