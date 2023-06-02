import { tap } from 'rxjs';
import { Component } from '@angular/core';
import { IProduct, productType } from 'src/app/shared/product/product';
import { ProductsService } from 'src/app/shared/product/products.service';

@Component({
  selector: 'app-vitamins',
  templateUrl: './vitamins.component.html',
  styleUrls: ['./vitamins.component.scss'],
})
export class VitaminsComponent {
  products: IProduct[] = [];

  constructor(private readonly productService: ProductsService) {}
  ngOnInit(): void {
    if (!this.products.length) {
      this.productService
        .getProductByType(productType.VITAMINS)
        .pipe(tap((products) => (this.products = products)))
        .subscribe();
    }
  }
}
