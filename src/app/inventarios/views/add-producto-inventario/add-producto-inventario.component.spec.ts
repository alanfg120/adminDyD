import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductoInventarioComponent } from './add-producto-inventario.component';

describe('AddProductoInventarioComponent', () => {
  let component: AddProductoInventarioComponent;
  let fixture: ComponentFixture<AddProductoInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductoInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
