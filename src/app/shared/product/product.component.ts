import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductsService } from './products.service';
import { IProductBasket } from './product-basket';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: IProduct;
  quantity: number = 1;
  totalPrice: number = 0;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.calculateTotalPrice();
  }

  addToBasket(): void {
    const productBasket: IProductBasket = {
      ...this.product,
      quantity: this.quantity,
      totalPrice: this.totalPrice,
    };
    this.productService.addToBasket(productBasket);
  }

  incrementQuantity(): void {
    this.quantity++;
    this.calculateTotalPrice();
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculateTotalPrice();
    }
  }

  private calculateTotalPrice(): void {
    this.totalPrice = this.product.price * this.quantity;
  }
}
