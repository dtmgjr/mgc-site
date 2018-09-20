import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendaService } from './venda.service';


@Component({
  selector: 'app-venda-terreno',
  templateUrl: './venda-terreno.component.html',
  styleUrls: ['./venda-terreno.component.css'],
  providers: [VendaService]
})
export class VendaTerrenoComponent implements OnInit {

  objVendaTerreno: Object;

  constructor(private router: Router, private data: VendaService) { }

  ngOnInit() {

    this.data.getInfoVenda().subscribe(
      data => {
        this.objVendaTerreno = data;
      }
    );
  }




  direcionaParaContato() {
    this.router.navigate(['./fale-conosco']);
  }

}
