import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCajaComponent } from './edit-caja.component';

describe('EditCajaComponent', () => {
  let component: EditCajaComponent;
  let fixture: ComponentFixture<EditCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
