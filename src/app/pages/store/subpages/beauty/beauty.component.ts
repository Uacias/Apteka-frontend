import { IProduct, productType } from './../../../../shared/product/product';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ProductsService } from 'src/app/shared/product/products.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss'],
})
export class BeautyComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private readonly productService: ProductsService) {}
  ngOnInit(): void {
    if (!this.products.length) {
      this.productService
        .getProductByType(productType.BEAUTY)
        .pipe(tap((products) => (this.products = products)))
        .subscribe();
    }
  }
}
