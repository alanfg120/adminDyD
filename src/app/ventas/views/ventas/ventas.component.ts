import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Caja } from 'src/app/cajas/models/caja.model';
import { CajasQuery } from 'src/app/cajas/store/cajas.query';
import { Venta } from '../../models/venta.model';
import { VentasQuery } from '../../store/ventas.query';
import { VentasService } from '../../store/ventas.service';
import { DetalleVentaComponent } from '../detalle-venta/detalle-venta.component';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  caja: Caja;
  constructor(
    public store: VentasQuery,
    private modal: ModalController,
    private service: VentasService,
    private storeCaja: CajasQuery,
    private router: ActivatedRoute,
    private storeCajas: CajasQuery
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      if (param.id) {
        this.caja = this.storeCajas.selectCaja(+param.id);
        console.log(this.caja);
      }
    });
  }

  async detalleVentaModal(venta: Venta) {
    const modal = await this.modal.create({
      component: DetalleVentaComponent,
      componentProps: {
        venta,
      },
    });
    return await modal.present();
  }

  reloadVentas() {
    this.service.getVentas();
  }

  base(id: number) {
    const caja = this.storeCaja.selectCaja(id);
    return caja.base;
  }
}
