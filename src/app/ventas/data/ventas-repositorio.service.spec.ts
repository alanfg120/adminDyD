import { TestBed } from '@angular/core/testing';

import { VentasRepositorioService } from './ventas-repositorio.service';

describe('VentasRepositorioService', () => {
  let service: VentasRepositorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentasRepositorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
