import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProductsService } from '../product/products.service';

@Injectable({
  providedIn: 'root',
})
export class BasketGuard implements CanActivate {
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.productService.isBasketEmpty()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
