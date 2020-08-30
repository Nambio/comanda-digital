import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {


  public cardapio = [
    {
      imagem: 'https://i.pinimg.com/564x/6e/e6/80/6ee680cf7da13f3be8cefd57f01f9c04.jpg',
      titulo: "Picanha assada ao alho",
      ingredientes: "Picanha maturada, alho fresco e cebolinha, tudo assado na brasa",
      valorCliente: "R$ 10.00",
      valorPrato: 10.00,
      item: 1
    },
    {
      imagem: 'https://i.pinimg.com/564x/6e/e6/80/6ee680cf7da13f3be8cefd57f01f9c04.jpg',
      titulo: "Picanha assada ao alho",
      ingredientes: "Picanha maturada, alho fresco e cebolinha, tudo assado na brasa",
      valorCliente: "R$ 10.00",
      valorPrato: 10.00,
      item: 2
    },
    {
      imagem: 'https://i.pinimg.com/564x/6e/e6/80/6ee680cf7da13f3be8cefd57f01f9c04.jpg',
      titulo: "Picanha assada ao alho",
      ingredientes: "Picanha maturada, alho fresco e cebolinha, tudo assado na brasa",
      valorCliente: "R$ 10.00",
      valorPrato: 10.00,
      item: 3
    },
    {
      imagem: 'https://i.pinimg.com/564x/6e/e6/80/6ee680cf7da13f3be8cefd57f01f9c04.jpg',
      titulo: "Picanha assada ao alho",
      ingredientes: "Picanha maturada, alho fresco e cebolinha, tudo assado na brasa",
      valorCliente: "R$ 10.00",
      valorPrato: 10.00,
      item: 4
    },
    {
      imagem: 'https://i.pinimg.com/564x/6e/e6/80/6ee680cf7da13f3be8cefd57f01f9c04.jpg',
      titulo: "Picanha assada ao alho",
      ingredientes: "Picanha maturada, alho fresco e cebolinha, tudo assado na brasa",
      valorCliente: "R$ 10.00",
      valorPrato: 10.00,
      item: 5
    },
    {
      imagem: 'https://i.pinimg.com/564x/6e/e6/80/6ee680cf7da13f3be8cefd57f01f9c04.jpg',
      titulo: "Picanha assada ao alho",
      ingredientes: "Picanha maturada, alho fresco e cebolinha, tudo assado na brasa",
      valorCliente: "R$ 10.00",
      valorPrato: 10.00,
      item: 6
    },
    {
      imagem: 'https://i.pinimg.com/564x/6e/e6/80/6ee680cf7da13f3be8cefd57f01f9c04.jpg',
      titulo: "Picanha assada ao alho",
      ingredientes: "Picanha maturada, alho fresco e cebolinha, tudo assado na brasa",
      valorCliente: "R$ 10.00",
      valorPrato: 10.00,
      item: 7
    },
    {
      imagem: 'https://i.pinimg.com/564x/6e/e6/80/6ee680cf7da13f3be8cefd57f01f9c04.jpg',
      titulo: "Picanha assada ao alho",
      ingredientes: "Picanha maturada, alho fresco e cebolinha, tudo assado na brasa",
      valorCliente: "R$ 10.00",
      valorPrato: 10.00,
      item: 8
    },
    {
      imagem: 'https://i.pinimg.com/564x/6e/e6/80/6ee680cf7da13f3be8cefd57f01f9c04.jpg',
      titulo: "Picanha assada ao alho",
      ingredientes: "Picanha maturada, alho fresco e cebolinha, tudo assado na brasa",
      valorCliente: "R$ 10.00",
      valorPrato: 10.00,
      item: 9
    },
    // {
    //   imagem: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    //   titulo: "Picanha assada ao alho",
    //   ingredientes: "Picanha maturada, alho freco e cebolinha, tudo assado na brasa",
    //   valorCliente: "R$ 10",
    //   valorPrato: 10.00
    // },
    
  ]
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public escolherItem(item){
    localStorage.setItem('itemCardapio', item);
    this.router.navigate(['cardapio/item']);
  }
}
