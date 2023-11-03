import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

import { ItemProductComponent } from './components/item-product/item-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

@NgModule({
  declarations: [ItemProductComponent, ListProductsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatExpansionModule,
    MatCardModule,
    NgOptimizedImage,
    MatButtonModule,
  ],
  exports: [ItemProductComponent, ListProductsComponent],
})
export class ProductsModule {}
