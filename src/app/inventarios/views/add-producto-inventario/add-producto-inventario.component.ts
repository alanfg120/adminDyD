/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { CajasService } from 'src/app/cajas/store/cajas.service';
import { ProductosQuery } from 'src/app/productos/store/productos.query';
import { Inventario } from '../../models/inventario.model';

@Component({
  selector: 'app-add-producto-inventario',
  templateUrl: './add-producto-inventario.component.html',
  styleUrls: ['./add-producto-inventario.component.css'],
})
export class AddProductoInventarioComponent implements OnInit {
  @Input() idCaja;
  idProducto: number;
  cantidad: number;
  constructor(
    private modal: ModalController,
    public storeProductos: ProductosQuery,
    private service: CajasService,
    private toast: ToastController
  ) {}

  ngOnInit(): void {}

  async addFormProducto(form: NgForm) {
    if (form.valid) {
      try {
        await this.service.addProductoToInventario({
          id_caja: this.idCaja,
          cantidad: this.cantidad,
          id_producto: this.idProducto,
        });
        this.snack('Producto Agregado');
      } catch (error) {
        this.snack('Producto ya existe');
      }
    } else {
      this.snack('Faltan Datos');
    }
  }

  closeModal() {
    this.modal.dismiss();
  }

  private async snack(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}
