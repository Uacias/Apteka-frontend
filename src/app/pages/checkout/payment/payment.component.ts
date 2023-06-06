import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/shared/product/products.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  paymentForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.setupForm();
  }

  submitForm(): void {
    if (this.paymentForm.valid) {
      console.log(this.paymentForm.value);
      this.router.navigate(['home']);
      this.productService.clearBasket();
    }
  }

  setupForm(): void {
    this.paymentForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      CVV: ['', [Validators.required]],
      expireDate: [<Date | null>null, [Validators.required]],
    });
  }
}
