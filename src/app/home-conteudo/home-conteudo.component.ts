import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ActivatedRoute, Router, Route } from '@angular/router';


@Component({
  selector: 'app-home-conteudo',
  templateUrl: './home-conteudo.component.html',
  styleUrls: ['./home-conteudo.component.css'],
  providers: [HomeService]
})
export class HomeConteudoComponent implements OnInit {

  objContent: Object;
  flag: Boolean = false;

  constructor(private data: HomeService) {
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.data.getConteudo().subscribe(
      data => this.objContent = data
    );
  }

  carregaFiltro(id) {

    this.data.getConteudoId(id).subscribe(
      data => this.objContent = data
    );
  }





}
