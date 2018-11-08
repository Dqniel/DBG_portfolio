import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techasia',
  templateUrl: './techasia.component.html',
  styleUrls: ['./techasia.component.scss']
})
export class TechasiaComponent implements OnInit {
  works = [
    {
      'name': 'Techasia',
      'section_class': 'w3',
      'images': [
        {'image': 'app/assets/images/techasia2_1000_500.jpg'},
        {'image': 'app/assets/images/techasia_1000_500.jpg'}
      ],
      'client': 'Techasia',
      'role': 'Design & code',
      'date': '2015',
      'href': null,
      'description': 'Techasia wants to be the french speaking blog reference for high-tech.\n' +
      '        I used the Flexbox css display for this site, the back end is done with drupal.',
      'next_class': 'w4',
      'next_link': 'old-portfolio',
      'next_label': 'Portfolio Daniel Bodi'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
