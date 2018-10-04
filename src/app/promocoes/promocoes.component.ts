import { Component, OnInit } from '@angular/core';
import { PromocoesService } from './promocoes.service';


@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css'],
  providers: [PromocoesService]
})
export class PromocoesComponent implements OnInit {

  objContent: Object;

  constructor(private data: PromocoesService) { }

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
