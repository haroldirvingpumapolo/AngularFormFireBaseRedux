import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'products-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css'],
})
export class ItemProductComponent {
  @Input() product?: Product;
}
