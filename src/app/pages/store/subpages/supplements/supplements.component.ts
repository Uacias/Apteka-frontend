import { tap } from 'rxjs';
import { Component } from '@angular/core';
import { IProduct, productType } from 'src/app/shared/product/product';
import { ProductsService } from 'src/app/shared/product/products.service';

@Component({
  selector: 'app-supplements',
  templateUrl: './supplements.component.html',
  styleUrls: ['./supplements.component.scss'],
})
export class SupplementsComponent {
  products: IProduct[] = [];

  constructor(private readonly productService: ProductsService) {}
  ngOnInit(): void {
    if (!this.products.length) {
      this.productService
        .getProductByType(productType.SUPPLEMENTS)
        .pipe(tap((products) => (this.products = products)))
        .subscribe();
    }
  }
}
