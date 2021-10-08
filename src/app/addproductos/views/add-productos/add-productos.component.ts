/* eslint-disable guard-for-in */
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
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

  constructor(
    private service: ProductosService,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  async addFormProducto(form: NgForm): Promise<void> {
    if (form.valid) {
      this.saveFormdata();
      const addProducto = await this.service.addProducto(this.formData);
      if (addProducto) {
        this.snack('Producto creado');
        form.reset();
        this.resetFormdata();
      }
      if (!addProducto) {
        this.snack('Error');
        form.reset();
        this.resetFormdata();
      }
    } else {
      this.snack('Faltan Datos');
    }
  }

  fileUpload($event): void {
    const file = $event.target.files[0];
    if (!this.formData.has('file')) {
      this.formData.append('file', file, `producto_img.jpg`);
    }
  }

  private async snack(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  private resetFormdata() {
    for (const key in this.producto) {
      this.formData.delete(key);
    }
    if (this.formData.has('file')) {
      this.formData.delete('file');
    }
  }
  private saveFormdata() {
    for (const key in this.producto) {
      this.formData.append(key, this.producto[key]);
    }
  }
}
