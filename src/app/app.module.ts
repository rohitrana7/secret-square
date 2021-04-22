import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoryTestComponent } from './top-categories/category-test.component';
import { ReviewSliderComponent } from './review-slider/review-slider.component';
import { VisitStoreComponent } from './visit-store/visit-store.component';
import { SofaMenuComponent } from './sofa-menu/sofa-menu.component';
import { TempleMenuComponent } from './temple-menu/temple-menu.component';
import { SteelMenuComponent } from './steel-menu/steel-menu.component';
import { PopMenuComponent } from './pop-menu/pop-menu.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CategoryTestComponent,
    ReviewSliderComponent,
    VisitStoreComponent,
    SofaMenuComponent,
    TempleMenuComponent,
    SteelMenuComponent,
    PopMenuComponent,
    routingComponents,
    ScrollToTopComponent,
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
