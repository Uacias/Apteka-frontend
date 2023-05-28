import { ProductsService } from '../../shared/product/products.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ISlide } from 'src/app/shared/carousel/slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carouselSlides!: ISlide[];

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.setupCarouselSlides();
    this.productsService
      .getAllProducts()
      .pipe(
        tap((e) => {
          console.log(e);
        })
      )
      .subscribe();
  }

  setupCarouselSlides() {
    this.carouselSlides = [
      {
        imageUrl: '../../../assets/img/carousel/carousel_home_1.jpg',
        altText: 'Carousel slide 1',
        logoUrl: '../../../assets/img/logo/output-onlinepngtools.png',
        title: 'Health in Your Hands',
        description:
          'Discover our wide range of medicines and supplements that will help you take care of your health.',
      },
      {
        imageUrl: '../../../assets/img/carousel/carousel_home_2.jpg',
        altText: 'Random second slide',
        logoUrl: '',
        title: 'Relief through Medicines',
        description:
          'With our wide range of medicines, you can alleviate pain, improve well-being, and restore health.',
      },
      {
        imageUrl: '../../../assets/img/carousel/carousel_home_3.jpg',
        altText: 'Random third slide',
        logoUrl: '',
        title: 'Excellence in Every Detail',
        description:
          'Our collection of cosmetics offers unique products that enhance your natural beauty.',
      },
    ];
  }
}
