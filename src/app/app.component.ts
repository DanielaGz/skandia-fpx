import { Component } from '@angular/core';

/**
 * El componente AppComponent es el componente raíz de la aplicación Angular.
 * Este componente es responsable de la vista principal de la aplicación y actúa como el contenedor principal para otros componentes.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * El título de la aplicación.
   * Este atributo se utiliza para mostrar el título en la barra del navegador u otras áreas de la interfaz de usuario.
   */
  title = 'skandia-fpx';
}
