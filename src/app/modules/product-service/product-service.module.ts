import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServiceComponentComponent } from './product-service-component/product-service-component.component';
import { ProductServiceRoutingModule } from './product-service-routing.module';

@NgModule({
  declarations: [ProductServiceComponentComponent],
  imports: [
    ProductServiceRoutingModule,
    CommonModule
  ]
})
export class ProductServiceModule { }
