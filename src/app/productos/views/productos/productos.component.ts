import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ProductosQuery } from '../../store/productos.query';
import { ProductosService } from '../../store/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  constructor(
    public store: ProductosQuery,
    public alertController: AlertController,
    private service: ProductosService
  ) {}

  ngOnInit() {}
  async deleteProdutoAlert(id: number,index: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar Producto',
      subHeader: '',
      message: 'Desea Eliminar el producto?.',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           this.service.deleteProducto(id,index);
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
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
