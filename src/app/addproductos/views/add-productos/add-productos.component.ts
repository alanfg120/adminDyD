/* eslint-disable guard-for-in */
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Producto } from 'src/app/productos/model/producto.model';
import { ProductosService } from 'src/app/productos/store/productos.service';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.scss'],
})
export class AddProductosComponent implements OnInit {
  producto: Producto = {
    nombre: '',
    cantidad: 0,
    descripcion: '',
    precio: 0,
    costo: 0,
  };
  formData = new FormData();

  constructor(private service: ProductosService) {}

  ngOnInit() {}

  addFormProducto(form: NgForm): void {
    if (form.valid) {
      for (const key in this.producto) {
        this.formData.append(key, this.producto[key]);
      }
      this.service.addProducto(this.formData);
    }
  }

  fileUpload($event): void {
    const file = $event.target.files[0];
    this.formData.append('file', file, `producto_img.jpg`);
  }
}
