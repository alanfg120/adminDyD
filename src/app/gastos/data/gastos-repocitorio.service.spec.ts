import { TestBed } from '@angular/core/testing';

import { GastosRepocitorioService } from './gastos-repocitorio.service';

describe('GastosRepocitorioService', () => {
  let service: GastosRepocitorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastosRepocitorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
