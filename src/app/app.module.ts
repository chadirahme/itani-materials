import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AqgComponent } from './aqg/aqg.component';
import { BrandsComponent } from './brands/brands.component';
// import { CarouselComponent } from './carousel/carousel.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { CotaliComponent } from './cotali/cotali.component';
import { FooterComponent } from './footer/footer.component';
import { GroheComponent } from './grohe/grohe.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ItaComponent } from './ita/ita.component';
import { PedrolloComponent } from './pedrollo/pedrollo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    // CarouselComponent,
    AboutComponent,
    // DocksComponent,
    // DrainageComponent,
    BrandsComponent,
    GroheComponent,
    PedrolloComponent,
    CotaliComponent,
    AqgComponent,
    ContactComponent,
    CategoryComponent,
    ItaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
