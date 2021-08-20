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
  cat_prod_filtered:any;
  constructor(private api: ApiService, private rutaActiva: ActivatedRoute) { }
  get_all_data(){
    this.cat_prod_filtered = 'all';
    this.api.get('http://localhost/tropicalisimo_api/api.php?controller=tienda').subscribe(data =>{
      this.data_prod = data;
    });
  }
  get_cat_data(){
    this.api.get('http://localhost/tropicalisimo_api/api.php?controller=categoria').subscribe(data =>{
      this.cat_prod = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.get_all_data();
    this.get_cat_data();    
    
    this.rutaActiva.params.subscribe((params: Params) => {
      console.log(params);
    });
  }

  filtrar_cat(e:any = false){
    if(e){
      let categoria = e.target.id;
      console.log(e.target.id);
      this.cat_prod_filtered = categoria;
      this.api.get(`http://localhost/tropicalisimo_api/api.php?controller=tienda&categoria=${categoria}`).subscribe( data => {
        this.data_prod = data;
      });
    }else{
      this.cat_prod_filtered = 'all';
      this.get_all_data();
    }  
  }

}
