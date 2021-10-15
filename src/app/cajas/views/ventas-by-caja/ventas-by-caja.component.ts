import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Venta } from 'src/app/ventas/models/venta.model';
import { DetalleVentaComponent } from 'src/app/ventas/views/detalle-venta/detalle-venta.component';

@Component({
  selector: 'app-ventas-by-caja',
  templateUrl: './ventas-by-caja.component.html',
  styleUrls: ['./ventas-by-caja.component.css'],
})
export class VentasByCajaComponent implements OnInit {
  @Input() ventas: Venta[];
  constructor(
    private modal: ModalController,
    private modalVentas: ModalController
  ) {}

  ngOnInit(): void {}

  async detalleVentaModal(venta: Venta) {
    const modal = await this.modalVentas.create({
      component: DetalleVentaComponent,
      componentProps: {
        venta,
      },
    });
    return await modal.present();
  }

  closeModal() {
    this.modal.dismiss();
  }

  get total() {
    if (this.ventas.length > 0) {
      let total = 0;
      this.ventas.forEach((venta) => {
        total = total + venta.total;
      });
      return total;
    }
  }
  get subtotal() {
    if (this.ventas.length > 0) {
      let total = 0;
      this.ventas.forEach((venta) => {
        total = total + venta.subtotal;
      });
      return total;
    }
  }
}
