import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { CreateProductPageComponent } from './create-product-page/create-product-page.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCreateFormPageComponent } from './product-create-form-page/product-create-form-page.component';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from './product-card/product-card.component'

@NgModule({
  declarations: [ProductPageComponent, CreateProductPageComponent, ProductCreateFormPageComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class ProductPageModule { }
