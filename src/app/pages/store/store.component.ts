import { Component, OnInit } from '@angular/core';
import { ISlide } from 'src/app/shared/carousel/slide';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  carouselSlides!: ISlide[];

  ngOnInit(): void {
    this.setupCarouselSlides();
  }

  setupCarouselSlides() {
    this.carouselSlides = [
      {
        imageUrl: '../../../assets/img/carousel/carousel_store_1.jpg',
        altText: 'Carousel slide 1',
        logoUrl: '',
        title: 'Quality Medicines for Your Health',
        description:
          'Discover our wide range of high-quality medicines and supplements that will help you take care of your health.',
      },
      {
        imageUrl: '../../../assets/img/carousel/carousel_store_2.jpg',
        altText: 'Random second slide',
        logoUrl: '',
        title: 'Relief and Wellness Solutions',
        description:
          'With our extensive selection of medications, you can alleviate pain, improve your well-being, and restore your health.',
      },
    ];
  }
}
