import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductServiceComponentComponent } from './product-service-component/product-service-component.component';

const routes: Routes = [{ path: '', component: ProductServiceComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductServiceRoutingModule { }