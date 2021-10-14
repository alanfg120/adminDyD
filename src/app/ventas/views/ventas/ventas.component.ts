import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Venta } from '../../models/venta.model';
import { VentasQuery } from '../../store/ventas.query';
import { DetalleVentaComponent } from '../detalle-venta/detalle-venta.component';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  constructor(public store: VentasQuery, private modal: ModalController) {}

  ngOnInit(): void {}

  async detalleVentaModal(venta: Venta) {
    const modal = await this.modal.create({
      component: DetalleVentaComponent,
      componentProps: {
        venta,
      },
    });
    return await modal.present();
  }
}
