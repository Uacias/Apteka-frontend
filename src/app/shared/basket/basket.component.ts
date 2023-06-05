import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product/products.service';
import { IProductBasket } from '../product/product-basket';
import { Router } from '@angular/router';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  basketProducts!: IProductBasket[];
  totalPrice = 0;

  constructor(
    private readonly productService: ProductsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.basketProducts = this.productService.getBasketProducts();
    this.totalPrice = this.calculateTotalPrice();
  }

  removeProductFromBasket(product: IProductBasket) {
    this.productService.removeFromBasket(product);
    this.basketProducts = this.productService.getBasketProducts();
    this.totalPrice = this.calculateTotalPrice();
  }

  updateQuantity(product: IProductBasket, index: number) {
    this.basketProducts[index].quantity = product.quantity;
    this.basketProducts[index].totalPrice = this.calculateSubtotal(
      this.basketProducts[index]
    );
    this.totalPrice = this.calculateTotalPrice();
  }

  calculateSubtotal(product: IProductBasket): number {
    return product.quantity * product.price;
  }

  calculateTotalPrice(): number {
    return this.productService.getBasketTotalPrice();
  }

  toggleBasket(): void {
    this.productService.toggleBasket();
  }

  displayCheckoutForm() {
    this.router.navigate(['checkout']);
    this.toggleBasket();
  }
}
