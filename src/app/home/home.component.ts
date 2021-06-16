import { Component, OnInit } from '@angular/core';

import * as Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const options = {
      strings: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, hic."],
      typeSpeed: 15,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: false
    };

    const typed = new Typed.default('.typed', options);

  }

}
