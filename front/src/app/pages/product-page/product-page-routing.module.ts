import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { CreateProductPageComponent } from './create-product-page/create-product-page.component';

const routes: Routes = [
    {
        path: '',
        component: ProductPageComponent,
    },
    {
        path: 'create',
        component: CreateProductPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPageRoutingModule { }
