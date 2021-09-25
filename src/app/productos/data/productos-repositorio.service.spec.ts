import { TestBed } from '@angular/core/testing';

import { ProductosRepositorioService } from './productos-repositorio.service';

describe('ProductosRepositorioService', () => {
  let service: ProductosRepositorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosRepositorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
