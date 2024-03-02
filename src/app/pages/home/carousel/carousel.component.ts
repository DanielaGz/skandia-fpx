import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

/**
 * El componente CarouselComponent es responsable de mostrar un carrusel de productos.
 * Permite la navegación entre los productos utilizando controles de flecha.
 */
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  /** Tamaño de cada tarjeta de producto en píxeles. */
  private cardSize: number = 23;

  /** Transformación aplicada al carrusel para desplazar los productos horizontalmente. */
  public transform: number = 0;

  /** Booleano que indica si el botón de retroceso está deshabilitado. */
  public disabledPrev: boolean = true;

  /** Booleano que indica si el botón de avance está deshabilitado. */
  public disabledNext: boolean = false;

  /** Tamaño de la ventana del navegador dividido por 16 para la conversión de estandar en rem (utilizado para calcular la cantidad de tarjetas que se muestran). */
  private WindowSize: number = window.innerWidth / 16;

  /** Número total de páginas en el carrusel. */
  public pages: number = 0;

  /** Página actual del carrusel. */
  public currentPage: number = 0;

  /** Lista de productos que se mostrarán en el carrusel. */
  public products: any = [];

  /** Evento de salida que se emite cuando se hace clic en el botón de productos recomendados para abrir la sección correspondiente. */
  @Output() open: EventEmitter<any> = new EventEmitter();

  /**
   * Constructor del componente CarouselComponent.
   * @param _productService Servicio para obtener la lista de productos.
   */
  constructor(
    private _productService: ProductService
  ) { }

  /**
   * Método del ciclo de vida ngOnInit.
   * Se ejecuta después de que Angular haya inicializado las propiedades del componente.
   */
  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * Listener del evento de redimensionamiento de la ventana.
   * @param event Evento de redimensionamiento.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.WindowSize = window.innerWidth / 16;
    this.calculateCards();
    this.validateDisabled();
  }

  /**
   * Método para obtener la lista de productos desde el servicio ProductService.
   */
  getProducts(){
    this._productService.getProducts()
    .then((response) => {
      this.products = response?.listCard;
      this.calculateCards();
    })
    .catch((error) => {
      console.error(error);
    });
  }

  /**
   * Método para calcular la cantidad de tarjetas que se pueden mostrar en el carrusel.
   */
  calculateCards(){
    const cantCards = Math.floor((this.WindowSize-10) / this.cardSize);
    this.pages = (this.products.length+1) - cantCards;
    this.disabledNext = this.pages === 0;
  }

  /**
   * Método para retroceder una página en el carrusel.
   */
  prevSlide() {
    this.currentPage--;
    this.transform = this.transform + this.cardSize;
    this.disabledPrev = this.currentPage === 0;
    this.validateDisabled();
  }

  /**
   * Método para avanzar una página en el carrusel.
   */
  nextSlide() {
    this.currentPage++;
    this.transform = this.transform - this.cardSize;
    this.validateDisabled();
  }

  /**
   * Método para validar si los botones de navegación deben estar deshabilitados.
   */
  validateDisabled(){
    this.disabledPrev = this.currentPage <= 0;
    this.disabledNext = this.currentPage >= this.pages;
  }

  /**
   * Método para emitir el evento 'open' cuando se hace clic en el botón productos recomendados.
   */
  openSection(){
    this.open.emit();
  }
}
