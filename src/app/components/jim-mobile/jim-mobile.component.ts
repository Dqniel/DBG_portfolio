import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jim-mobile',
  templateUrl: './jim-mobile.component.html',
  styleUrls: ['./jim-mobile.component.scss']
})
export class JimMobileComponent implements OnInit {
  works = [
    {
      'name': 'Jim mobile',
      'section_class': 'w2',
      'images': [
        {'image': 'app/assets/images/jim_1.png'},
        {'image': 'app/assets/images/jim_2.png'},
        {'image': 'app/assets/images/jim_3.png'},
        {'image': 'app/assets/images/jim_4.png'}
      ],
      'client': 'Jim mobile',
      'role': 'UI & Front-end',
      'date': '2016',
      'href': 'http://www.jimmobile.be',
      'description': 'Jim mobile\'s website, powered by AEM, AngularJS, and LESS',
      'next_class': 'w3',
      'next_link': 'techasia',
      'next_label': 'Techasia'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
