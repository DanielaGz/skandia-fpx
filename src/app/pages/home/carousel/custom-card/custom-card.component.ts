import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/**
 * El componente CustomCardComponent representa una tarjeta personalizada.
 */
@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit {

  /**
   * Evento de salida que se emite cuando se hace clic en el botón para abrir una sección de productos recomendados.
   */
  @Output() open: EventEmitter<any> = new EventEmitter();

  /**
   * Constructor del componente CustomCardComponent.
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
   * Método que se ejecuta cuando se hace clic en el botón para abrir una sección productos recomendados.
   * Emite el evento de salida 'open' para notificar a otros componentes que se debe abrir una sección.
   */
  openSection(){
    this.open.emit();
  }
}
