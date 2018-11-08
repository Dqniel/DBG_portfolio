import { Component, OnInit, Input } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html'
})
export class WorkPageComponent implements OnInit {
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  public config: SwiperConfigInterface = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    navigation: true,
    pagination: this.pagination,
    loop: true
  };
  @Input() works: Array<number>;

  constructor() { }

  ngOnInit() {
  }

}

