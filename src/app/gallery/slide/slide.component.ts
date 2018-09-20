import { Component, OnInit, Input } from '@angular/core';

import { Slide } from './slide.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  @Input() slides: Slide[];

  constructor() { }

  ngOnInit() { }

}
