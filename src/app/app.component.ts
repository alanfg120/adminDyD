import { Component } from '@angular/core';
import { CajasService } from './cajas/store/cajas.service';
import { ProductosService } from './productos/store/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private productoService: ProductosService,
    private cajasService: CajasService
  ) {
    this.productoService.getProductos();
    this.cajasService.getCajas();
  }
}
