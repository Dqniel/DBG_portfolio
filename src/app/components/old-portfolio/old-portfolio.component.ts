import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-old-portfolio',
  templateUrl: './old-portfolio.component.html',
  styleUrls: ['./old-portfolio.component.scss']
})
export class OldPortfolioComponent implements OnInit {
  works = [
    {
      'name': 'Daniel Bodi',
      'section_class': 'w4',
      'images': [
        {'image': 'app/assets/images/dbg1_1000_500.jpg'},
        {'image': 'app/assets/images/dbg2_1000_500.jpg'},
        {'image': 'app/assets/images/dbg3_1000_500.jpg'},
        {'image': 'app/assets/images/dbg4_1000_500.jpg'},
        {'image': 'app/assets/images/dbg5_1000_500.jpg'}
      ],
      'client': 'my-self',
      'role': 'Design & code',
      'date': '2014',
      'href': 'http://www.danielbodigil.com/old',
      'description': 'The former version of my portfolio, done with css3 techniques like \n' +
      '     @support and flexbox display, and a parallax effect',
      'next_class': 'w5',
      'next_link': 'starter',
      'next_label': 'starter'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
