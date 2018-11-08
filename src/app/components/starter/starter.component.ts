import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit {
  works = [
    {
      'name': 'Starter',
      'section_class': 'w5',
      'images': [
        {'image': 'app/assets/images/starter1_1000_500.jpg'},
        {'image': 'app/assets/images/starter2_1000_500.jpg'},
        {'image': 'app/assets/images/starter3_1000_500.jpg'},
        {'image': 'app/assets/images/starter4_1000_500.jpg'},
        {'image': 'app/assets/images/starter5_1000_500.jpg'},
        {'image': 'app/assets/images/starter6_1000_500.jpg'},
        {'image': 'app/assets/images/starter7_1000_500.jpg'}
      ],
      'client': 'AE Starter',
      'role': 'Design & code',
      'date': '2015',
      'href': null,
      'description': 'For the refresh of the driving school Starter\'s web site,  \n' +
      '     I choosed to work with the Flexbox display method and a home made left push menu',
      'next_class': 'w1',
      'next_link': 'base',
      'next_label': 'Base\'s website'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
