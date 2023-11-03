import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { tap } from 'rxjs';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  public products?: Product[];
  public panelExpanded?:boolean;

  constructor(private productsSvc: ProductsService) {}

  ngOnInit(): void {
    this.productsSvc
      .getProducts()
      .pipe(tap((res) => (console.log(res), (this.products = res))))
      .subscribe();
  }
}
