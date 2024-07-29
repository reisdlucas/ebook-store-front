import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './feature/list/list.component'
import { inject } from '@angular/core';
import { ProductsService } from './shared/services/products.service';
import { getProducts } from './shared/resolvers/get-products.resolver';
import { getProduct } from './shared/resolvers/get-product.resolver';

export const routes: Routes = [{
    path: '',
    resolve: {
        products:  getProducts,
    },
    component: ListComponent
},

{
    path: 'create-product',
    loadComponent: () =>
        import('./features/create/create.component').then((m) => m.CreateComponent),
},

{
    path: 'edit-product/:id',
    resolve: {
        product: getProduct,
    },
    loadComponent: () => import('./features/edit/edit.component').then((m) => m.EditComponent),
},

];
