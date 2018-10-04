import { Component, OnInit, Input } from '@angular/core';
import { JumboModel } from './jumbotron.model';


@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

   title = 'Título';
   subtitle = 'subtitulo';

  constructor() { }

  ngOnInit() {
  }

}
