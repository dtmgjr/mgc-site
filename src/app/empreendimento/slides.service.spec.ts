import { TestBed, inject } from '@angular/core/testing';

import { SlidesServiceEmp } from './slides.service';

describe('SlidesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlidesServiceEmp]
    });
  });

  it('should be created', inject([SlidesServiceEmp], (service: SlidesServiceEmp) => {
    expect(service).toBeTruthy();
  }));
});
