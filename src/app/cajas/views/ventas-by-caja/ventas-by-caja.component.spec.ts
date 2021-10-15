import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasByCajaComponent } from './ventas-by-caja.component';

describe('VentasByCajaComponent', () => {
  let component: VentasByCajaComponent;
  let fixture: ComponentFixture<VentasByCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasByCajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasByCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
