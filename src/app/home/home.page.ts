import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos/store/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private productoService: ProductosService) {}
  ngOnInit(): void {
    this.productoService.getProductos();
  }

}
