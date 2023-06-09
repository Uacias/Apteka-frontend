import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: 'home',
      },
      {
        label: 'Store',
        items: [
          { label: 'Pharmacy', routerLink: 'store/pharmacy' },
          {
            label: 'Health & Wellness',
            routerLink: 'store/health-and-wellness',
          },
          { label: 'Beauty', routerLink: 'store/beauty' },
          { label: 'Supplements', routerLink: 'store/supplements' },
          { label: 'Vitamins', routerLink: 'store/vitamins' },
          { label: 'Diet & Nutrition', routerLink: 'store/diet-and-nutrition' },
          { label: 'Tea & Coffee', routerLink: 'store/tea-and-coffee' },
        ],
      },

      {
        label: 'About Us',
        items: [
          { label: 'Location & Hours', routerLink: 'about/location' },
          { label: 'Contact Us', routerLink: 'about/contact' },
          { label: 'Our story', routerLink: 'about/our-story' },
          {
            label: 'Terms & Conditions',
            routerLink: 'about/terms-and-conditions',
          },
          { label: 'Privacy Policy', routerLink: 'about/privacy-policy' },
        ],
      },
    ];
  }
}
