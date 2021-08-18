import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.sass']
})
export class TiendaComponent implements OnInit {
  data_prod:any;
  cat_prod:any;
  constructor(private api: ApiService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.get('http://localhost/tropicalisimo_api/api.php?controller=tienda').subscribe(data =>{
      this.data_prod = data;
    });
    this.api.get('http://localhost/tropicalisimo_api/api.php?controller=categoria').subscribe(data =>{
      this.cat_prod = data;
      console.log(data);
    });
    this.rutaActiva.params.subscribe((params: Params) => {
      console.log(params);
    });
  }

  filtrar_cat(e:any){
    console.log(e.target.id);
  }

}
