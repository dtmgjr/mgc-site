import { TestBed, inject } from '@angular/core/testing';

import { JumbotronService } from './jumbotron.service';

describe('JumbotronService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JumbotronService]
    });
  });

  it('should be created', inject([JumbotronService], (service: JumbotronService) => {
    expect(service).toBeTruthy();
  }));
});
