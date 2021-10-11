import { Component } from '@angular/core';
import { ProductosService } from './productos/store/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private productoService: ProductosService) {
    this.productoService.getProductos();
  }
}
