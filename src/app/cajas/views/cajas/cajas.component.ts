import { Component, OnInit } from '@angular/core';
import { CajasQuery } from '../../store/cajas.query';

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['./cajas.component.css'],
})
export class CajasComponent implements OnInit {
  fechaActual = new Date().toISOString();
  options;
  meses = [
    'Enero',
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
  constructor(public store: CajasQuery) {}

  ngOnInit(): void {
    this.options = {
      buttons: [
        {
          text: 'Guardar',
          handler: () => console.log('Clicked Save!'),
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
          },
        },
      ],
    };
  }
}
