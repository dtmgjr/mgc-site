import { Component, OnInit } from '@angular/core';
import { QuemSomosService } from './quem-somos.service';
import { Observable } from 'rxjs/Observable';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.css'],
  providers: [QuemSomosService]
})
export class QuemSomosComponent implements OnInit {

  objQuemSomos: Object;

  constructor(private data: QuemSomosService) { }

  ngOnInit() {
    this.data.getInfo().subscribe(
      data => {
        this.objQuemSomos = data;
      }
    );
  }





}
