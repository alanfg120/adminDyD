import { Component, OnInit } from '@angular/core';
import { ProductosQuery } from '../../store/productos.query';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  constructor(public store: ProductosQuery) {}

  ngOnInit() {
  }
}
