/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { CajasService } from 'src/app/cajas/store/cajas.service';
import { ProductosQuery } from 'src/app/productos/store/productos.query';
import { Gasto } from '../../models/gastos.model';

@Component({
  selector: 'app-add-gasto',
  templateUrl: './add-gasto.component.html',
  styleUrls: ['./add-gasto.component.css'],
})
export class AddGastoComponent implements OnInit {
  @Input() idCaja: number;
  descripcion: string;
  costo: number;
  constructor(
    private modal: ModalController,
    public storeProductos: ProductosQuery,
    private service: CajasService,
    private toast: ToastController
  ) {}

  ngOnInit(): void {}

  async addFormGasto(form: NgForm) {
    if (form.valid) {
      this.addGasto({
        costo: this.costo,
        descripcion: this.descripcion,
        id_caja: this.idCaja,
      });
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
  private async addGasto(gasto: Gasto) {
    try {
      await this.service.addGasto(gasto);
      this.snack('Gasto Agregado');
    } catch (error) {
      this.snack('Error');
    }
  }
}
