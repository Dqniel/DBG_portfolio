import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private pagination: SwiperPaginationInterface = {
      el: '.swiper-pagination',
      clickable: true
    };
   public config: SwiperConfigInterface = {
    direction: 'vertical',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    navigation: true,
    pagination: this.pagination,
    loop: true,
    grabCursor: true
   };

   pages = [
     {
       'section': 'Daniel',
       'salute': 'Hi! i\'m',
       'name': 'Daniel',
       'description': 'UI Designer & Developer',
       'c2a_label': 'about me',
       'c2a_link': 'about',
       'next_label': 'Scroll to see my work',
       'next_link': '#base'
     },
     {
       'section': 'base',
       'description': 'UI & front-end',
       'c2a_label': 'details',
       'c2a_link': 'base',
       'next_label': 'jimmobile.be',
       'next_link': '#jimmobile'
     },
     {
       'section': 'jim mobile',
       'description': 'UI & front-end',
       'c2a_label': 'details',
       'c2a_link': 'jim',
       'next_label': 'Techasia',
       'next_link': '#techasia'
     },
     {
       'section': 'techasia',
       'description': 'UI & front-end',
       'c2a_label': 'details',
       'c2a_link': 'techasia',
       'next_label': 'Old portfolio daniel bodi',
       'next_link': '#oldportfolio'
     },
     {
       'section': 'Daniel Bodi',
       'description': 'UI & front-end',
       'c2a_label': 'details',
       'c2a_link': 'old-portfolio',
       'next_label': 'Driving school starter',
       'next_link': '#starter'
     },
     {
       'section': 'starter',
       'description': 'UI & front-end',
       'c2a_label': 'details',
       'c2a_link': 'starter',
       'next_label': 'about me',
       'next_link': '#about'
     }
   ];
   constructor() { }

  ngOnInit() {
  }
}
