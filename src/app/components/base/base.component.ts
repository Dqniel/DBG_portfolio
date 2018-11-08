import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  works = [
    {
      'name': 'Base',
      'section_class': 'w1b',
      'images': [
        {'image': 'app/assets/images/base_1.png'},
        {'image': 'app/assets/images/base_2.png'},
        {'image': 'app/assets/images/base_3.png'},
        {'image': 'app/assets/images/base_4.png'},
        {'image': 'app/assets/images/base_5.png'}
      ],
      'client': 'Base',
      'role': 'UI & Front-end',
      'date': '2017',
      'href': 'http://www.base.be',
      'description': 'Base\'s website, powered by AEM, AngularJS, and LESS',
      'next_class': 'w2',
      'next_link': 'jim',
      'next_label': 'Jim mobile website'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
