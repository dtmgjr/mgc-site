import { Component, OnInit } from '@angular/core';
import { TrabalheConoscoService } from './trabalhe-conosco.service';


@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.css'],
  providers: [TrabalheConoscoService]
})
export class TrabalheConoscoComponent implements OnInit {

  objTrabalheConosco: Object;

  constructor(private data: TrabalheConoscoService) { }

  ngOnInit() {
    this.data.getTrabalheConosco().subscribe(
      data => this.objTrabalheConosco = data
    );
  }

}
