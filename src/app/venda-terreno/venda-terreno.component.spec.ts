import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaTerrenoComponent } from './venda-terreno.component';

describe('VendaTerrenoComponent', () => {
  let component: VendaTerrenoComponent;
  let fixture: ComponentFixture<VendaTerrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaTerrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaTerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
