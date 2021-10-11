import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Caja } from 'src/app/cajas/models/caja.model';
import { CajasService } from 'src/app/cajas/store/cajas.service';
import { ProductosService } from 'src/app/productos/store/productos.service';

@Component({
  selector: 'app-add-caja',
  templateUrl: './add-caja.component.html',
  styleUrls: ['./add-caja.component.css'],
})
export class AddCajaComponent implements OnInit {
  caja: Caja = {
    fecha: new Date().toISOString(),
    base: undefined,
  };
  fecha = new Date().toISOString();
  options;
  meses;
  constructor(private service: CajasService, private toast: ToastController) {}

  ngOnInit(): void {
    this.meses = [
      'Ene',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    this.options = {
      buttons: [
        {
          text: 'Guardar',
          handler: () => console.log('Clicked Save!'),
        },
      ],
    };
  }

  async addCaja(form: NgForm) {
    if (form.valid) {
      try {
        await this.service.addCaja(this.caja);
        this.snack('Caja Creada');
      } catch (error) {
        this.snack('Ocurrio Un error');
      }
    } else {
      this.snack('Faltan datos');
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
