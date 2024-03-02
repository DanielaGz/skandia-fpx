import { Component, OnInit } from '@angular/core';

/**
 * El componente ObjectiveComponent muestra la sección objetivo.
 * Este componente se encarga de la lógica y la vista del objetivo de la aplicación.
 */
@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {

  /**
   * Constructor del componente ObjectiveComponent.
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
