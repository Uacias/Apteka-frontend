import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { NavComponent } from './shared/nav/nav.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { AvatarModule } from 'primeng/avatar';
import { HomeComponent } from './pages/home/home.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/about/subpages/contact/contact.component';
import { LocationComponent } from './pages/about/subpages/location/location.component';
import { OurStoryComponent } from './pages/about/subpages/our-story/our-story.component';
import { TermsAndConditionsComponent } from './pages/about/subpages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './pages/about/subpages/privacy-policy/privacy-policy.component';
import { StoreComponent } from './pages/store/store.component';
import { PharmacyComponent } from './pages/store/subpages/pharmacy/pharmacy.component';
import { HealthAndWellnessComponent } from './pages/store/subpages/health-and-wellness/health-and-wellness.component';
import { BeautyComponent } from './pages/store/subpages/beauty/beauty.component';
import { SupplementsComponent } from './pages/store/subpages/supplements/supplements.component';
import { VitaminsComponent } from './pages/store/subpages/vitamins/vitamins.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BestsellersComponent } from './pages/home/bestsellers/bestsellers.component';
import { UserOpinionsComponent } from './pages/home/user-opinions/user-opinions.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    LocationComponent,
    OurStoryComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    StoreComponent,
    PharmacyComponent,
    HealthAndWellnessComponent,
    BeautyComponent,
    SupplementsComponent,
    VitaminsComponent,
    CarouselComponent,
    FooterComponent,
    BestsellersComponent,
    UserOpinionsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCarouselModule,
    CardModule,
    AvatarModule,
    RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
