import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'qrcode', component: QrcodeComponent},
  { path: '**', component: HomeComponent},
  // { path: 'cardapio', component: CardapioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
