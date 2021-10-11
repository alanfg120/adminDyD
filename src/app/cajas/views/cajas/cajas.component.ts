import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
    private service: CajasService
  ) {}

  ngOnInit(): void {}

  async deleteCajaAlert(id: number, index: number) {
    const alert = await this.alertController.create({
      message: 'Desea Eliminar la caja?',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.deleteCaja(id, index);
          },
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });
    await alert.present();
  }

  private async deleteCaja(id: number, index: number) {
    const deleteCaja = await this.service.deleteCaja(id, index);
    if (!deleteCaja) {
      this.alertController.dismiss();
    }
  }
}
