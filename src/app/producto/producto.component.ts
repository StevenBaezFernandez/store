import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.sass']
})
export class ProductoComponent implements OnInit {
  idProd:string = '';
  dataProd:any[] = [];

  constructor(private api: ApiService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) =>{
      this.idProd = params.prod;
      // console.log(this.idProd);
      this.api.get(`http://localhost/tropicalisimo_api/api.php?controller=tienda&id=${this.idProd}`).subscribe(data => {
        this.dataProd = data;
        console.log(data);
      });
    });
  }

}
