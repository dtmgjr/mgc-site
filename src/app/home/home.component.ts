import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public contato: any;

  constructor() { }

  ngOnInit() { }
  /*
  onSubmit(form: NgForm) {
    const body = JSON.stringify(form.value);
    console.log(body);
    this.http.post('http://localhost:8000/enviar', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
    .subscribe(data => {
      console.log(data);
    });
  }
  */

}
