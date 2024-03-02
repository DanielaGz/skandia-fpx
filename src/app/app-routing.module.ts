import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * El módulo AppRoutingModule proporciona las rutas principales de la aplicación Angular.
 * Este módulo se utiliza para configurar la navegación entre diferentes vistas y componentes de la aplicación.
 */
const routes: Routes = [];

@NgModule({
  /**
   * Importa el módulo RouterModule y configura las rutas principales de la aplicación.
   * RouterModule.forRoot() se utiliza para configurar las rutas raíz de la aplicación.
   */
  imports: [RouterModule.forRoot(routes)],

  /**
   * Exporta el módulo RouterModule para que las rutas estén disponibles para otros módulos de la aplicación.
   */
  exports: [RouterModule]
})
export class AppRoutingModule { }
