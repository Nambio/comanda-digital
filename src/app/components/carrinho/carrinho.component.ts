import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../model/Pedido'
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  public pedido: Pedido;
  public pedidos: Array<Pedido>;

  constructor(private router: Router) { }

  ngOnInit(): void {
      
    this.pedido = JSON.parse(localStorage.getItem('pedido')) || [];
    this.pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    console.log(this.pedido);
    console.log(this.pedidos);
  }
  public removerItem(item){
    if(this.pedidos != null && this.pedidos.length > 0){
      this.pedidos = this.pedidos.filter(x=>x.idItem !== item);
      localStorage.setItem('pedidos', JSON.stringify(this.pedidos));
      if(this.pedidos != null && this.pedidos.length < 1){
        this.router.navigate(['cardapio']);
      }
    }
    
  }
}
