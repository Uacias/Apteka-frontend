import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/about/subpages/contact/contact.component';
import { OurStoryComponent } from './pages/about/subpages/our-story/our-story.component';
import { VitaminsComponent } from './pages/store/subpages/vitamins/vitamins.component';
import { PharmacyComponent } from './pages/store/subpages/pharmacy/pharmacy.component';
import { HealthAndWellnessComponent } from './pages/store/subpages/health-and-wellness/health-and-wellness.component';
import { BeautyComponent } from './pages/store/subpages/beauty/beauty.component';
import { SupplementsComponent } from './pages/store/subpages/supplements/supplements.component';
import { StoreComponent } from './pages/store/store.component';
import { RedirectedPagesGuard } from './shared/guards/redirected-pages.guard';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { BasketGuard } from './shared/guards/basket.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'about',
    canActivate: [RedirectedPagesGuard],
    component: AboutComponent,
    children: [
      { path: 'contact', component: ContactComponent },
      { path: 'our-story', component: OurStoryComponent },
    ],
  },
  {
    path: 'store',
    canActivate: [RedirectedPagesGuard],
    component: StoreComponent,
    children: [
      { path: 'pharmacy', component: PharmacyComponent },
      { path: 'health-and-wellness', component: HealthAndWellnessComponent },
      { path: 'beauty', component: BeautyComponent },
      { path: 'supplements', component: SupplementsComponent },
      { path: 'vitamins', component: VitaminsComponent },
    ],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [BasketGuard],
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
