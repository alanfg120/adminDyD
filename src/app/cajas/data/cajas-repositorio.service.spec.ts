import { TestBed } from '@angular/core/testing';

import { CajasRepositorioService } from './cajas-repositorio.service';

describe('CajasRepositorioService', () => {
  let service: CajasRepositorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CajasRepositorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
