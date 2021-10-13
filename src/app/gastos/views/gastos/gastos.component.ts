import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { CajasQuery } from 'src/app/cajas/store/cajas.query';
import { CajasService } from 'src/app/cajas/store/cajas.service';
import { Gasto } from '../../models/gastos.model';
import { AddGastoComponent } from '../add-gasto/add-gasto.component';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css'],
})
export class GastosComponent implements OnInit {
  idCaja: number;
  gastos: Gasto[];
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
      this.gastos = caja.gastos;
      this.idCaja = caja.id;
    });
  }
  async updateGastoAlert(gasto: Gasto, index: number) {
    const alert = await this.alertController.create({
      message: 'Edita el gasto',
      inputs: [
        {
          name: 'costo',
          type: 'number',
          placeholder: 'Costo',
          value: this.gastos[index].costo,
        },
        {
          name: 'descripcion',
          type: 'text',
          placeholder: 'Descripcion',
          value: this.gastos[index].descripcion,
        },
      ],
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'secondary',
          handler: (event) => {
            gasto.costo = event.costo;
            gasto.descripcion = event.descripcion;
            this.updateGasto(gasto, index);
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

  async deleteGastoAlert(id: number, index: number) {
    const alert = await this.alertController.create({
      message: 'Elimina  el gasto',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'secondary',
          handler: (event) => {
            this.deleteGasto(id, index);
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

  async addGastoModal() {
    const modal = await this.modal.create({
      component: AddGastoComponent,
      componentProps: {
        idCaja: this.idCaja,
      },
    });
    return await modal.present();
  }

  private async updateGasto(gasto: Gasto, index: number) {
    try {
      const update = await this.service.updateGasto(gasto, index);
      if (update) {
        console.log('update', update);
      }
    } catch (error) {
      console.log(error);
    }
  }
  private async deleteGasto(id: number, index: number) {
    try {
      await this.service.deleteGasto(id, this.idCaja, index);
    } catch (error) {
      console.log(error);
    }
  }
}
