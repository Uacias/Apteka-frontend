import { tap } from 'rxjs';
import { Component } from '@angular/core';
import { IProduct, productType } from 'src/app/shared/product/product';
import { ProductsService } from 'src/app/shared/product/products.service';

@Component({
  selector: 'app-health-and-wellness',
  templateUrl: './health-and-wellness.component.html',
  styleUrls: ['./health-and-wellness.component.scss'],
})
export class HealthAndWellnessComponent {
  products: IProduct[] = [];

  constructor(private readonly productService: ProductsService) {}
  ngOnInit(): void {
    if (!this.products.length) {
      this.productService
        .getProductByType(productType.HEALTHWELLNESS)
        .pipe(tap((products) => (this.products = products)))
        .subscribe();
    }
  }
}
