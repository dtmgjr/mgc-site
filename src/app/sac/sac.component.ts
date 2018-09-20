import { Component, OnInit } from '@angular/core';
import { SacService } from './sac.service';


@Component({
  selector: 'app-sac',
  templateUrl: './sac.component.html',
  styleUrls: ['./sac.component.css'],
  providers: [SacService]
})
export class SacComponent implements OnInit {

  sacObject: Object;

  constructor(private data: SacService) { }

  ngOnInit() {
    this.data.getSacInfo().subscribe(
      data => this.sacObject = data
    );
  }

}
