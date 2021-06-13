import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductoComponent } from './producto/producto.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'galeria', component: GaleriaComponent},  
  {path: 'contacto', component: ContactoComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'producto', component: ProductoComponent},
  {path: '', redirectTo: './  ', pathMatch: 'full', },
  {path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
