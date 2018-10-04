import { Component, OnInit } from '@angular/core';
import { ImageFotos } from '../../empreendimento/images-fotos/image-fotos.model';

import { ImgFotosService } from '../../empreendimento/images-fotos/img-fotos.service';
import { ImgPlantasService } from '../../empreendimento/plantas/img-plantas.service';

@Component({
  selector: 'app-gallery-empreendimento',
  templateUrl: './gallery-empreendimento.component.html',
  styleUrls: ['./gallery-empreendimento.component.css'],
  providers: [ImgFotosService, ImgPlantasService]
})
export class GalleryEmpreendimentoComponent implements OnInit {

  images: ImageFotos[];
  plantas: ImageFotos[];

  constructor(private servFotos: ImgFotosService,
    private servPlanta: ImgPlantasService) { }

  ngOnInit() {
    this.servFotos.images().subscribe(fotos => this.images = fotos);
    // this.servPlanta.imagePlanta().subscribe(plantas => this.plantas = plantas);
  }

}
