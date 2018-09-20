import { Injectable } from '@angular/core';

import { Slide } from './slide/slide.model';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class SlidesService {

  constructor() { }

  slides(): Observable<Slide[]> {
    return of([
      {
        id: 'slide-1',
        title: '',
        description: '',
        imagePath: '/assets/images/logo-venda.png',
        imageAlt: ''
      },
      {
        id: 'slide-2',
        title: 'Obras',
        description: '',
        imagePath: '/assets/images/banner-1.png',
        imageAlt: ''
      },
      {
        id: 'slide-3',
        title: 'Obras',
        description: '',
        imagePath: '/assets/images/banner-2.png',
        imageAlt: ''
      },
      {
        id: 'slide-4',
        title: 'Obras',
        description: '',
        imagePath: '/assets/images/banner-3.png',
        imageAlt: ''
      },
      {
        id: 'slide-5',
        title: 'Obras',
        description: '',
        imagePath: '/assets/images/2000x500.png',
        imageAlt: ''
      }
    ]);
  }

}
