import { Component, OnInit } from '@angular/core';
import { ServicoService } from './servico.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
  providers: [ServicoService]
})
export class ServicosComponent implements OnInit {

  objConstrucao: Object;
  objProjeto: Object;
  objConsultoria: Object;
  objGerenciamento: Object;
  objIncorporacao: Object;

  constructor(private data: ServicoService) { }

  ngOnInit() {
    this.data.getConstrucao().subscribe(
      data => { this.objConstrucao = data; }
    );

    this.data.getProjeto().subscribe(
      data => { this.objProjeto = data; }
    );

    this.data.getConsultoria().subscribe(
      data => { this.objConsultoria = data; }
    );

    this.data.getGerenciamento().subscribe(
      data => { this.objGerenciamento = data; }
    );

    this.data.getIncorporacao().subscribe(
      data => { this.objIncorporacao = data; }
    );


  }

}
