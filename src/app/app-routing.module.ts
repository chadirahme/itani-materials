import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AqgComponent } from './aqg/aqg.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { CotaliComponent } from './cotali/cotali.component';
import { GroheComponent } from './grohe/grohe.component';
import { HomeComponent } from './home/home.component';
import { ItaComponent } from './ita/ita.component';
import { PedrolloComponent } from './pedrollo/pedrollo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'drainage', component: DrainageComponent },
  // { path: 'docks', component: DocksComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'grohe/:name', component: GroheComponent },
  { path: 'pedrollo', component: PedrolloComponent },
  { path: 'cotali', component: CotaliComponent },
  { path: 'aqg', component: AqgComponent },
  { path: 'ita', component: ItaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'category', component: CategoryComponent },
  { path: '*', component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
