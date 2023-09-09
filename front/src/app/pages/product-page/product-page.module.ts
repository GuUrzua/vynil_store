import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { CreateProductPageComponent } from './create-product-page/create-product-page.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductPageComponent, CreateProductPageComponent],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductPageModule { }
