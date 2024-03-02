import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { PagesComponent } from './pages/pages.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ObjectiveComponent } from './pages/home/objective/objective.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { CardComponent } from './pages/home/carousel/card/card.component';
import { CustomCardComponent } from './pages/home/carousel/custom-card/custom-card.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { RecommendedProductsComponent } from './pages/home/recommended-products/recommended-products.component';
import { ProductService } from './shared/services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardRecomendedComponent } from './pages/home/recommended-products/card-recommended/card-recommended.component';

/**
 * Este es el módulo principal de la aplicación.
 * Contiene la configuración raíz y los componentes principales.
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagesComponent,
    SidebarComponent,
    HomeComponent,
    ObjectiveComponent,
    CarouselComponent,
    CardComponent,
    CustomCardComponent,
    FooterComponent,
    RecommendedProductsComponent,
    CardRecomendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
