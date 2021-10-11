import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductosComponent } from './views/add-productos/add-productos.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddproductosRoutingModule } from './addproductos-routing.module';


@NgModule({
  declarations: [AddProductosComponent],
  exports:[AddProductosComponent],
  imports: [
    CommonModule,
    AddproductosRoutingModule,
    IonicModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AddproductosModule { }
