import { Component, OnInit, Input } from '@angular/core';
import { ImageFotos } from '../images-fotos/image-fotos.model';
import { ImgFotosService } from '../images-fotos/img-fotos.service';
import { ImgPlantasService } from '../plantas/img-plantas.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [ImgFotosService, ImgPlantasService]
})
export class ModalComponent implements OnInit {

  objImages: ImageFotos[];
  flag: String;

  constructor(private servImages: ImgFotosService, private servPlantas: ImgPlantasService) { }

  abreModal(info) {
    this.flag = info;
  }

  ngOnInit() {

    if (this.flag === 'imovel') {
      this.servImages.images().subscribe(
        servImages => this.objImages = servImages
      );
    } else {
      this.servPlantas.imagePlanta().subscribe(
        servPlantas => this.objImages = servPlantas
      );
    }
  }
}

