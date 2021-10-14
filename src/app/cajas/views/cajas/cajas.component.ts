import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { CajasQuery } from '../../store/cajas.query';
import { CajasService } from '../../store/cajas.service';

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['./cajas.component.css'],
})
export class CajasComponent implements OnInit {
  constructor(
    public store: CajasQuery,
    public alertController: AlertController,
    private service: CajasService,
    private toast: ToastController
  ) {}

  ngOnInit(): void {}

  async deleteCajaAlert(id: number, index: number) {
    const alert = await this.alertController.create({
      message: 'Desea Eliminar la caja?',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'secondary',
          handler: (blah) => {
            this.deleteCaja(id, index);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });
    await alert.present();
  }
  async activarCaja(event, id: number) {
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
    try {
      const active = await this.service.activarCaja(id, event.detail.checked);
      if (active) {
        this.snack('Caja Activada');
      } else {
        this.snack('Caja Desactivada');
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async deleteCaja(id: number, index: number) {
    const deleteCaja = await this.service.deleteCaja(id, index);
    if (!deleteCaja) {
      this.alertController.dismiss();
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
}
