import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import {CardapioComponent} from './components/cardapio/cardapio.component'
import {ItemCardapioComponent} from './components/item-cardapio/item-cardapio.component'
import {CarrinhoComponent} from './components/carrinho/carrinho.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'qrcode', component: QrcodeComponent},
  { path: 'cardapio', component: CardapioComponent},
  { path: 'cardapio/item', component: ItemCardapioComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: '**', component: HomeComponent},
  
  // { path: 'cardapio', component: CardapioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

