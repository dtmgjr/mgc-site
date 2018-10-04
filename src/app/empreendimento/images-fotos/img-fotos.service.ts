import { Injectable } from '@angular/core';
import { ImageFotos } from './image-fotos.model';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ImgFotosService {

  constructor() { }

  images(): Observable<ImageFotos[]> {
    return of([
      {
        id: 'slide-1',
        title: '',
        description: '',
        imagePath: '/assets/images/casa.jpg',
        imageAlt: ''
      },
      {
        id: 'slide-2',
        title: '',
        description: '',
        imagePath: '/assets/images/casa01.jpg',
        imageAlt: ''
      },
      {
        id: 'slide-3',
        title: '',
        description: '',
        imagePath: '/assets/images/casa03.jpg',
        imageAlt: ''
      },
      {
        id: 'slide-5',
        title: '',
        description: '',
        imagePath: '/assets/images/casa05.jpg',
        imageAlt: ''
      }
    ]);
  }

}
