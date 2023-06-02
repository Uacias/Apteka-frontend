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
        ],
      },

      {
        label: 'About Us',
        items: [

          { label: 'Contact Us', routerLink: 'about/contact' },
          { label: 'Our story', routerLink: 'about/our-story' },
        ],
      },
    ];
  }
}
