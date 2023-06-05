import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  items!: MenuItem[];
  activeStep: number = 0;

  constructor(private readonly checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Shipping & Billing',
      },

      {
        label: 'Payment',
      },
    ];

    this.checkoutService.nextStep$.subscribe(() => {
      this.nextStep();
    });
  }

  nextStep() {
    ++this.activeStep;
  }
}
