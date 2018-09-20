import { Component, OnInit } from '@angular/core';

import { ImageFotos } from './images-fotos/image-fotos.model';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-empreendimento',
  templateUrl: './empreendimento.component.html',
  styleUrls: ['./empreendimento.component.css']

})
export class EmpreendimentoComponent implements OnInit {

  slidesImages: ImageFotos[];

  constructor() { }

  ngOnInit() {



  }

}
