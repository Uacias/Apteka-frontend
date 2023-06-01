import { tap } from 'rxjs';
import { Component } from '@angular/core';
import { IProduct, productType } from 'src/app/shared/product/product';
import { ProductsService } from 'src/app/shared/product/products.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss'],
})
export class PharmacyComponent {
  products: IProduct[] = [];

  constructor(private readonly productService: ProductsService) {}
  ngOnInit(): void {
    if (!this.products.length) {
      this.productService
        .getProductByType(productType.PHARMACY)
        .pipe(tap((products) => (this.products = products)))
        .subscribe();
    }
  }
}
