import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Venta } from '../../models/venta.model';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css'],
})
export class DetalleVentaComponent implements OnInit {
  @Input() venta: Venta;
  constructor(private modal: ModalController) {}

  ngOnInit(): void {}
  closeModal() {
    this.modal.dismiss();
  }
}
