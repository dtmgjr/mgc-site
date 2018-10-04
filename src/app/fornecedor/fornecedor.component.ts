import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from './fornecedor.service';


@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css'],
  providers: [FornecedorService]
})
export class FornecedorComponent implements OnInit {

  objFornecedor: Object;

  constructor(private router: Router, private data: FornecedorService) { }

  ngOnInit() {
    this.data.getFornecedor().subscribe(
      data => { this.objFornecedor = data; }
    );
  }




  direcionaParaContato() {
    this.router.navigate(['./fale-conosco']);
  }

}
