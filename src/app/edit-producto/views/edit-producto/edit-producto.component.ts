/* eslint-disable guard-for-in */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Producto } from 'src/app/productos/model/producto.model';
import { ProductosQuery } from 'src/app/productos/store/productos.query';
import { ProductosService } from 'src/app/productos/store/productos.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css'],
})
export class EditProductoComponent implements OnInit {
  producto: Producto;
  formData = new FormData();
  constructor(
    private router: ActivatedRoute,
    private store: ProductosQuery,
    public toast: ToastController,
    private service: ProductosService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.producto = this.store.selectProducto(+param.id);
      console.log(this.producto);
    });
  }
  async updateFormProducto(form: NgForm): Promise<void> {
    if (form.valid) {
      this.saveFormdata();
      const updateProducto = await this.service.updateProducto(
        this.formData,
        this.producto
      );
      if (updateProducto) {
        this.snack('Producto Editado');
        this.resetFormdata();
      }
      if (!updateProducto) {
        this.snack('Error');
        this.resetFormdata();
      }
    } else {
      this.snack('Faltan Datos');
    }
  }

  fileUpload($event): void {
    const file = $event.target.files[0];
    if (!this.formData.has('file')) {
      this.formData.append('file', file, `${this.producto.id}.jpg`);
    }
  }

  private async snack(message: string) {
    const toast = await this.toast.create({
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
