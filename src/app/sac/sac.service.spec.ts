import { TestBed, inject } from '@angular/core/testing';

import { SacService } from './sac.service';

describe('SacService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SacService]
    });
  });

  it('should be created', inject([SacService], (service: SacService) => {
    expect(service).toBeTruthy();
  }));
});
