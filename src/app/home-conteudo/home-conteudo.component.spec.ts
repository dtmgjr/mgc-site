import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConteudoComponent } from './home-conteudo.component';

describe('HomeConteudoComponent', () => {
  let component: HomeConteudoComponent;
  let fixture: ComponentFixture<HomeConteudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConteudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
