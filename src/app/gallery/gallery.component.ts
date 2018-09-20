import { Component, OnInit } from '@angular/core';

import { Slide } from './slide/slide.model';
import { SlidesService } from './slides.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  slides: Slide[];

  constructor(private slidesService: SlidesService) { }

  ngOnInit() {
    this.slidesService.slides().subscribe(slides => this.slides = slides);
  }

}
