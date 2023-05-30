import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IProduct } from 'src/app/shared/product/product';
import { ProductsService } from 'src/app/shared/product/products.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss'],
})
export class BestsellersComponent implements OnInit {
  bestSellers: IProduct[] = [];

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .getBestSellers()
      .pipe(
        tap((bestSellers) => {
          this.bestSellers = bestSellers;
          console.log(this.bestSellers);
        })
      )
      .subscribe();
  }
}
