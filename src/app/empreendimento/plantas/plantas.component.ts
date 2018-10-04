import { Component, OnInit } from '@angular/core';
import { ImgPlantasService } from './img-plantas.service';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ImgFotosService } from '../images-fotos/img-fotos.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css'],
  providers: [ImgPlantasService]
})
export class PlantasComponent implements OnInit {

  objImgPlantas: Object;
  modal = new ModalComponent(null, null);

  constructor(private service: ImgPlantasService, private modalService: NgbModal) { }

  ngOnInit() {
    this.service.imagePlanta().subscribe(
      service => this.objImgPlantas = service
    );
  }

  open() {
    this.modalService.open(ModalComponent);
    this.modal.abreModal('planta');
  }


}
