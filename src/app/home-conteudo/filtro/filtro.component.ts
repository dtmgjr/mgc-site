import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FiltroService } from './filtro.service';
import { BairroService } from './-bairro.service';
import { CidadeService } from './-cidade.service';
import { CategoriaService } from './-categoria.service';
import { HomeConteudoComponent } from '../home-conteudo.component';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css'],
  providers: [
    FiltroService,
    BairroService,
    CidadeService,
    CategoriaService,
    HomeConteudoComponent,
    HomeService
  ]
})
export class FiltroComponent implements OnInit {

  objCidade: any;
  objBairro: any;
  objCategoria: any;

  cidadeEscolhida: String = 'Selecione a cidade';
  BairroEscolhido: String = 'Selecione o bairro';
  CategoriaEscolhida: String = 'Selecione a categoria';

  idCidade: String;
  idBairro: String;
  idCategoria: String;

  bairrodisabled: String = 'disabled';
  catdisabled: String = 'disabled';

  constructor(
    private router: ActivatedRoute,
    private cidade: CidadeService,
    private bairro: BairroService,
    private categoria: CategoriaService,
    private home: HomeConteudoComponent,
    private data: HomeService
  ) { }

  ngOnInit() {
    this.loadCidade();
    this.home.init();
  }

  loadCidade() {
    this.cidade.getTodasCidades().subscribe(
      cidade => this.objCidade = cidade
    );
  }

  cidadeSelecionada(id, name) {
    this.idCidade = id;
    this.cidadeEscolhida = 'Cidade: ' + name;
    this.bairrodisabled = '';

    this.bairro.getBairro(id).subscribe(
      bairro => this.objBairro = bairro
    );
  }

  bairroSelecionado(id, name) {
    this.idBairro = id;
    this.BairroEscolhido = 'Bairro: ' + name;
    this.catdisabled = '';

    this.categoria.getCategorias(id).subscribe(
      categoria => this.objCategoria = categoria
    );
  }

  categoriaSelecionada(id, name) {
    this.idCategoria = id;
    this.CategoriaEscolhida = 'Categoria: ' + name;
  }

  pesquisaEmpreendimento() {
    this.home.carregaFiltro(this.idCidade);
  }

}

