import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductOffersComponent } from './components/product-offers/product-offers.component';
import { ProductRatingsComponent } from './components/product-ratings/product-ratings.component';

const routes: Routes = [
    {
        path: '', component: ProductListComponent, pathMatch:'full', canActivate: [AuthGuard]
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'products', component: ProductListComponent, canActivate: [AuthGuard]
    },
    {
        path: 'products', component: ProductListComponent, canActivate: [AuthGuard]
    },
    {
        path: 'product/:id', component: ProductDetailsComponent, canActivateChild: [AuthGuard],
        children: [
            {
                path: 'rating', component: ProductRatingsComponent, canDeactivate: [AuthGuard]
            },
            {
                path: 'offers', component: ProductOffersComponent
            }
        ]
    },
    {
        path: 'service',
        loadChildren: () => import('./modules/product-service/product-service.module').then(m => m.ProductServiceModule),
        canLoad: [AuthGuard]
    },
    {
        path: '**', component:ProductListComponent, pathMatch:'full', canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
