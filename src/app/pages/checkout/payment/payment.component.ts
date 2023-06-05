import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  shippingForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    this.setupForm();
  }

  submitForm(): void {
    if (this.shippingForm.valid) {
      console.log(this.shippingForm.value);
    }
  }

  setupForm(): void {
    this.shippingForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      CVV: ['', [Validators.required]],
      expireDate: [<Date | null>null, [Validators.required]],
    });
  }
}
