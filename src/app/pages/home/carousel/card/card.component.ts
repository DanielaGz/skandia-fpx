import { Component, Input, OnInit } from '@angular/core';

/**
 * El componente CardComponent representa una tarjeta.
 * Esta tarjeta muestra información sobre un producto y tiene un icono y un color aleatorios.
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  /**
   * Iconos aleatorios para la tarjeta.
   */
  private randomIcon = [
    'assets/images/Trofeo.svg',
    'assets/images/Happy.svg',
    'assets/images/Handheart.svg',
  ];
  
  /**
   * Color aleatorio para la tarjeta.
   */
  private randomColor = [
    '--blue-ligth',
    '--green',
    '--blue-dark',
    '--orange'
  ];

  /**
   * Icono seleccionado para la tarjeta.
   */
  public selectedIcon: string = '';

  /**
   * Color seleccionado para la tarjeta.
   */
  public selectedColor: string = '';

  /**
   * Producto mostrado en la tarjeta.
   */
  @Input() product: any;

  /**
   * Constructor del componente CardComponent.
   * Este constructor se utiliza para inicializar cualquier dependencia necesaria.
   */
  constructor() { }

  /**
   * Método del ciclo de vida ngOnInit.
   * Se ejecuta después de que Angular haya inicializado las propiedades del componente.
   * Aquí se selecciona un icono y un color aleatorio para la tarjeta.
   */
  ngOnInit(): void {
    this.selectedIcon = this.randomIcon[Math.floor(Math.random() * this.randomIcon.length)];
    this.selectedColor = this.randomColor[Math.floor(Math.random() * this.randomColor.length)];
  }

}
