import { TestBed, inject } from '@angular/core/testing';

import { EmpreendimentoService } from './empreendimento.service';

describe('EmpreendimentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpreendimentoService]
    });
  });

  it('should be created', inject([EmpreendimentoService], (service: EmpreendimentoService) => {
    expect(service).toBeTruthy();
  }));
});
