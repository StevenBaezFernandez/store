import { Component, OnInit } from '@angular/core';

import * as Typed from 'typed.js';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

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

    this.api.get(`http://localhost/tropicalisimo_api/api.php?controller=hp`).subscribe(data =>{
      console.log(data);
    });

  }

}
