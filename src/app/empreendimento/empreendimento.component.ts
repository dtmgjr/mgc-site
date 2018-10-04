import { Component, OnInit } from '@angular/core';

import { ImageFotos } from './images-fotos/image-fotos.model';
import { ModalComponent } from './modal/modal.component';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-empreendimento',
  templateUrl: './empreendimento.component.html',
  styleUrls: ['./empreendimento.component.css']

})
export class EmpreendimentoComponent implements OnInit {

  slidesImages: ImageFotos[];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  redirecionaContato() {
    this.router.navigate(['/fale-conosco']);
  }

}
