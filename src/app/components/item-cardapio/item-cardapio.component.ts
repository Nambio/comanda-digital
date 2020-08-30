import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../model/Pedido'
import {ItemCardapio} from '../../model/ItemCardapio'
import { Bebidas } from '../../model/Bebidas';
import { ItensAdicionais } from '../../model/ItensAdicionais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.css']
})
export class ItemCardapioComponent implements OnInit {

  public quantidadeItem = 1;
  public valorItens = 0;
  public valorTotal = 0;

  public pedidos:Array<Pedido>;
  public pedido:Pedido;
  public itemCardapio: ItemCardapio;

  public itemCardapioMock:ItemCardapio = 
    {
      idItem: 2,
      imagem: 'https://i.pinimg.com/564x/6e/e6/80/6ee680cf7da13f3be8cefd57f01f9c04.jpg',
      titulo: "Picanha assada ao alho",
      ingredientes: "Picanha maturada, alho fresco e cebolinha, tudo assado na brasa",
      valor: 10.00,
      itensAdicionais:[
        {
          id:1,
          nome:"Porção de arroz",
          valor: 2.00
        },
        {
          id:2,
          nome:"Porção de feijao",
          valor:2.00
        },
        {
          id:3,
          nome:"Carne extra",
          valor:4.00
        }
      ],
      bebidas:[
        {
          id:1,
          nome:"Coca",
          valor:2.00
        },
        {
          id:2,
          nome:"Agua",
          valor:2.00
        },
        {
          id:3,
          nome:"cerveja skol 320 ml",
          valor:4.00
        },
        {
          id:4,
          nome:"Wisky black label dose",
          valor:4.00
        }
      ],
    }; 

  constructor(private router: Router) { }

  ngOnInit(): void {
    let item = localStorage.getItem("itemCardapio");
    this.itemCardapio = this.itemCardapioMock;
    this.valorTotal = this.valorItens = this.itemCardapio.valor ;
    
    this.pedido = this.itemParaPedido(this.itemCardapio);
  }

  public retirar(){
    this.quantidadeItem--;
    this.valorTotal = this.pedido.valores * this.quantidadeItem ;
  }

  public incluir(){
    this.quantidadeItem++;
    this.valorTotal = this.pedido.valores * this.quantidadeItem;
  }

  public incluirRetirarItensAdicionais(item){

    if(this.pedido.itensAdicionais != null && this.pedido.itensAdicionais.find(x=>x.id===item)){
      let itens: ItensAdicionais = this.itemCardapio.itensAdicionais.find(x=>x.id===item)
      this.pedido.valores = this.pedido.valores - itens.valor;
      this.valorTotal = this.pedido.valores * this.quantidadeItem ;
      this.pedido.itensAdicionais = this.pedido.itensAdicionais.filter(x=>x.id!==item);

    }else{
      let itens: ItensAdicionais = this.itemCardapio.itensAdicionais.find(x=>x.id===item)
      this.pedido.itensAdicionais.push(itens);
      this.pedido.valores = this.pedido.valores + itens.valor;
      this.valorTotal = this.pedido.valores * this.quantidadeItem ;
    }
    console.log(this.pedido);
    console.log(item);
  }

  public incluirRetirarBebidas(item){

    if(this.pedido.bebidas != null && this.pedido.bebidas.find(x=>x.id===item)){
      let bebida: Bebidas = this.itemCardapio.bebidas.find(x=>x.id===item);
      this.pedido.valores = this.pedido.valores - bebida.valor;
      this.valorTotal = this.pedido.valores * this.quantidadeItem;
      this.pedido.bebidas = this.pedido.bebidas.filter(x=>x.id!==item);
    }else{
      let bebida: Bebidas = this.itemCardapio.bebidas.find(x=>x.id===item);
      this.pedido.bebidas.push(bebida);
      this.pedido.valores = this.pedido.valores + bebida.valor;
      this.valorTotal = this.pedido.valores * this.quantidadeItem;
    }
    console.log(this.pedido);
    console.log(item);
  }

  private itemParaPedido(itemCardapio: ItemCardapio): Pedido {
    this.pedido = new Pedido();
    this.pedido.valores = itemCardapio.valor;
    this.pedido.idItem = itemCardapio.idItem;
    this.pedido.titulo = itemCardapio.titulo;
    this.pedido.valorPrato = itemCardapio.valor;
    this.pedido.itensAdicionais = [];
    this.pedido.bebidas = [];
    return this.pedido;
  }

  public adicionarCarrinho(){
    this.pedido.quantidade =  this.quantidadeItem;
    this.pedidos = this.pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    this.pedidos.push(this.pedido);
    localStorage.setItem('pedido', JSON.stringify(this.pedido));
    localStorage.setItem('pedidos', JSON.stringify(this.pedidos));
    this.router.navigate(['carrinho']);
  }

}
