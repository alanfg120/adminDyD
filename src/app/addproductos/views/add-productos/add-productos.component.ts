import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/productos/model/producto.model';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.scss'],
})
export class AddProductosComponent implements OnInit {

  producto: Producto = {
    nombre      : '',
    cantidad    : 0,
    descripcion : '',
    precio      : 0,
    costo       : 0
  };

  constructor() { }

  ngOnInit() {}

}
