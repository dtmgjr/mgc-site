import { TestBed, inject } from '@angular/core/testing';

import { TrabalheConoscoService } from './trabalhe-conosco.service';

describe('TrabalheConoscoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrabalheConoscoService]
    });
  });

  it('should be created', inject([TrabalheConoscoService], (service: TrabalheConoscoService) => {
    expect(service).toBeTruthy();
  }));
});
