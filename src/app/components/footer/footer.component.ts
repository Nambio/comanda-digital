import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../model/Pedido'
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public pedidos:Array<Pedido>;
  public quantidadeItem = 1;
  public valorItens = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    if(this.pedidos != []){
      this.pedidos.forEach(x=>{
        this.valorItens = this.valorItens + x.valores;
        this.quantidadeItem = this.quantidadeItem + x.quantidade;
      });
      this.quantidadeItem = this.quantidadeItem  * this.pedidos.length;
    }
  }

  // ngOnChanges(): void{

  // }

  irCarrinho(){
    this.router.navigate(['carrinho']);
  }

}
