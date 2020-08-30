import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title = 'Comanda Digital';

  public restaurante = {
    nome: "Restaurante do Zé",
    imagem: 'https://media-cdn.tripadvisor.com/media/photo-s/08/ff/9b/b8/r3-express-food.jpg',
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  showFiller = false;

  retornaHome(){
    this.router.navigate(['/home']);
  }
}
