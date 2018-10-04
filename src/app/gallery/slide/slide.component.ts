import { Component, OnInit, Input } from '@angular/core';

import { Slide } from './slide.model';
import { ImageFotos } from '../../empreendimento/images-fotos/image-fotos.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  @Input() slides: Slide[];
  @Input() images: ImageFotos[];

  constructor() { }

  ngOnInit() { }

}
