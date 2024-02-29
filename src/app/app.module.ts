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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagesComponent,
    SidebarComponent,
    HomeComponent,
    ObjectiveComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
