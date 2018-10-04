import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { EmpreendimentoService } from '../empreendimento.service';

import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImgFotosService } from './img-fotos.service';
import { ImgPlantasService } from '../plantas/img-plantas.service';

@Component({
  selector: 'app-images-fotos',
  templateUrl: './images-fotos.component.html',
  styleUrls: ['./images-fotos.component.css'],
  providers: [EmpreendimentoService, ImgFotosService, ImgPlantasService]
})
export class ImagesFotosComponent implements OnInit {

  objImages: Object;
  images: Object;
  modal = new ModalComponent(null, null);

  constructor(private data: EmpreendimentoService, private modalService: NgbModal, private imgService: ImgFotosService) { }

  ngOnInit() {
    this.data.getImagens().subscribe(
      data => this.objImages = data
    );

    this.imgService.images().subscribe(
      imgService => this.images = imgService
    );
  }

  open() {
    this.modalService.open(ModalComponent, { size: 'lg' });
    this.modal.abreModal('imoveis');

  }



}
