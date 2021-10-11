import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Caja } from 'src/app/cajas/models/caja.model';
import { CajasQuery } from 'src/app/cajas/store/cajas.query';
import { CajasService } from 'src/app/cajas/store/cajas.service';

@Component({
  selector: 'app-edit-caja',
  templateUrl: './edit-caja.component.html',
  styleUrls: ['./edit-caja.component.css'],
})
export class EditCajaComponent implements OnInit {
  caja: Caja;
  options;
  meses;
  constructor(
    private router: ActivatedRoute,
    private store: CajasQuery,
    public toast: ToastController,
    private service: CajasService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.caja = this.store.selectCaja(+param.id);
    });
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
          handler: (event) => {
            const fecha = new Date();
            fecha.setMonth(event.month.value);
            fecha.setFullYear(event.year.value);
            fecha.setDate(event.day.value);
            this.caja.fecha = fecha;
          },
        },
      ],
    };
  }

  async updateCaja(form: NgForm) {
    if (form.valid) {
      try {
        const update = await this.service.updateCaja(this.caja);
        if (update) {
          this.snack('Caja Editada');
        } else {
          this.snack('Error');
        }
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
