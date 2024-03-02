import { Component, OnInit } from '@angular/core';

/**
 * El componente RecommendedProductsComponent muestra la sección de productos recomendados.
 * Este componente se encarga de la lógica y la vista de la sección de productos recomendados.
 */
@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.css']
})
export class RecommendedProductsComponent implements OnInit {

  /**
   * Constructor del componente RecommendedProductsComponent.
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
