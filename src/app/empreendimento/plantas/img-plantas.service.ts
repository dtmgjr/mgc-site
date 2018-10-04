import { Injectable } from '@angular/core';
import { ImageFotos } from '../images-fotos/image-fotos.model';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ImgPlantasService {

  constructor() { }

  imagePlanta(): Observable<ImageFotos[]> {
    return of([
      {
        id: 'slide-1',
        title: '',
        description: '',
        imagePath: '/assets/images/planta/planta1.jpg',
        imageAlt: ''
      },
      {
        id: 'slide-2',
        title: 'Obras',
        description: '',
        imagePath: '/assets/images/planta/planta2.jpg',
        imageAlt: ''
      },
      {
        id: 'slide-3',
        title: 'Obras',
        description: '',
        imagePath: '/assets/images/planta/planta3.jpg',
        imageAlt: ''
      },
      {
        id: 'slide-5',
        title: 'Obras',
        description: '',
        imagePath: '/assets/images/planta/planta4.jpg',
        imageAlt: ''
      }
    ]);
  }

}
