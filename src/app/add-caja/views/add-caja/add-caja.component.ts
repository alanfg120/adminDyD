import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-caja',
  templateUrl: './add-caja.component.html',
  styleUrls: ['./add-caja.component.css'],
})
export class AddCajaComponent implements OnInit {
  fecha = new Date().toISOString();
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
  constructor() {}

  ngOnInit(): void {
    this.options = {
      buttons: [
        {
          text: 'Guardar',
          handler: () => console.log('Clicked Save!'),
        },
      ],
    };
  }

  addCaja(form: NgForm) {}
}
