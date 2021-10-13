import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { CajasQuery } from 'src/app/cajas/store/cajas.query';
import { CajasService } from 'src/app/cajas/store/cajas.service';
import { ProductosQuery } from 'src/app/productos/store/productos.query';
import { Inventario } from '../../models/inventario.model';
import { AddProductoInventarioComponent } from '../add-producto-inventario/add-producto-inventario.component';

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.scss'],
})
export class InventariosComponent implements OnInit {
  inventario: Inventario[];
  idCaja: number;

  constructor(
    public store: CajasQuery,
    public alertController: AlertController,
    private service: CajasService,
    private router: ActivatedRoute,
    private modal: ModalController
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      const caja = this.store.selectCaja(+param.id);
      this.inventario = caja.inventarios || [];
      this.idCaja = +param.id;
    });
  }
  async updateProdutoAlert(id: number, index: number) {
    const alert = await this.alertController.create({
      message: 'Edita la cantidad',
      inputs: [
        {
          name: 'cantidad',
          type: 'number',
          placeholder: 'Cantidad',
          value: this.inventario[index].cantidad,
        },
      ],
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'secondary',
          handler: (event) => {
            this.inventario[index].cantidad = event.cantidad;
            this.updateInventario(index);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }
  async deleteProdutoAlert(id: number, index: number) {
    const alert = await this.alertController.create({
      message: 'Elimina  el producto del inventario',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'secondary',
          handler: (event) => {
            this.deleteInventario(id, index);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }
  async addProductoToInventarioModal() {
    const modal = await this.modal.create({
      component: AddProductoInventarioComponent,
      componentProps: {
        idCaja: this.idCaja,
      },
    });
    return await modal.present();
  }
  private async updateInventario(index: number) {
    const update = await this.service.updateInventario(
      this.idCaja,
      this.inventario[index],
      index
    );
    if (update) {
      console.log('inventario update');
    }
  }
  private async deleteInventario(idProducto: number, index: number) {
    console.log(this.idCaja);

    const update = await this.service.deleteInventario(
      this.idCaja,
      idProducto,
      index
    );
    if (update) {
      console.log('inventario delete');
    }
  }
}
