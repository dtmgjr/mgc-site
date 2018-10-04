import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FaleConoscoService } from './fale-conosco.service';


@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  faleConoscoForm: FormGroup;

  mask: any[] = ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


  constructor(private formBuilder: FormBuilder, private faleConoscoService: FaleConoscoService) { }

  ngOnInit() {
    this.faleConoscoForm = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      telefone: this.formBuilder.control('', [Validators.required]),
      tipo_contato: this.formBuilder.control('', [Validators.required]),
      mensagem: this.formBuilder.control('', [Validators.required])
    });

  }

  enviarEmail(email: any) {
    this.faleConoscoService.enviarEmail(email);
  }

}
