import { TestBed } from '@angular/core/testing';

import { InventariosRepocitorioService } from './inventarios-repocitorio.service';

describe('InventariosRepocitorioService', () => {
  let service: InventariosRepocitorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventariosRepocitorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
