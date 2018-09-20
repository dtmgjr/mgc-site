import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  direcionaParaContato() {
    this.router.navigate(['./fale-conosco']);
  }

}
