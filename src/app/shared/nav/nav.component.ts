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
          { label: 'Pharmacy' },
          { label: 'Health & Wellness' },
          { label: 'Beauty' },
          { label: 'Supplements' },
          { label: 'Vitamins' },
          { label: 'Diet & Nutrition' },
          { label: 'Tea & Coffee' },
        ],
      },

      {
        label: 'About',
        routerLink: 'about',
      },
      {
        label: 'Contact',
        routerLink: 'contact',
      },
    ];
  }
}
