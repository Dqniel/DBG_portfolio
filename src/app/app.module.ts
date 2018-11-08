import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { SopraComponent } from './components/sopra/sopra.component';
import { JimMobileComponent } from './components/jim-mobile/jim-mobile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { OldPortfolioComponent } from './components/old-portfolio/old-portfolio.component';
import { TechasiaComponent } from './components/techasia/techasia.component';
import { StarterComponent } from './components/starter/starter.component';
import { HomeComponent } from './components/home/home.component';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkPageComponent } from './components/work-page/work-page.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'vertical',
  threshold: 50,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    SopraComponent,
    JimMobileComponent,
    AboutMeComponent,
    OldPortfolioComponent,
    TechasiaComponent,
    StarterComponent,
    HomeComponent,
    ButtonsComponent,
    HeaderComponent,
    FooterComponent,
    WorkPageComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
