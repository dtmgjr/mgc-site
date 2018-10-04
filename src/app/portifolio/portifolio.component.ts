import { Component, OnInit } from '@angular/core';
import { PortifolioService } from './portifolio.service';


@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css'],
  providers: [PortifolioService]
})
export class PortifolioComponent implements OnInit {

  objContent: Object;

  constructor(private data: PortifolioService) { }

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
