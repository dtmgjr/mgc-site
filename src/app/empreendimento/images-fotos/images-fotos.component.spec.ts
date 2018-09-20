import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesFotosComponent } from './images-fotos.component';

describe('ImagesFotosComponent', () => {
  let component: ImagesFotosComponent;
  let fixture: ComponentFixture<ImagesFotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesFotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
