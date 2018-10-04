import { Component, OnInit } from '@angular/core';

import { Slide } from './slide/slide.model';
import { SlidesService } from './slides.service';

import { ImageFotos } from '../empreendimento/images-fotos/image-fotos.model';

import { ImgFotosService } from '../empreendimento/images-fotos/img-fotos.service';
import { ImgPlantasService } from '../empreendimento/plantas/img-plantas.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ImgFotosService, ImgPlantasService]
})
export class GalleryComponent implements OnInit {

  slides: Slide[];
  fotos: ImageFotos[];
  plantas: ImageFotos[];

  constructor(private slidesService: SlidesService,
    private servFotos: ImgFotosService,
    private servPlanta: ImgPlantasService
  ) { }

  ngOnInit() {
    this.slidesService.slides().subscribe(slides => this.slides = slides);
    this.servFotos.images().subscribe(fotos => this.fotos = fotos);
    this.servPlanta.imagePlanta().subscribe(plantas => this.plantas = plantas);
  }



}
