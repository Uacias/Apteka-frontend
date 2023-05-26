import { Component, OnInit } from '@angular/core';
import { ISlide } from 'src/app/shared/carousel/slide';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  carouselSlides!: ISlide[];

  ngOnInit(): void {
    this.setupCarouselSlides();
  }

  setupCarouselSlides() {
    this.carouselSlides = [
      {
        imageUrl: '../../../assets/img/carousel/carousel_about_1.jpg',
        altText: 'Carousel slide 1',
        logoUrl: '',
        title: 'Our Dedicated Team',
        description:
          'Meet our experienced and dedicated team of professionals who are committed to providing you with the best care.',
      },
      {
        imageUrl: '../../../assets/img/carousel/carousel_about_2.jpg',
        altText: 'Random second slide',
        logoUrl: '',
        title: 'Building Trust in Healthcare',
        description:
          'We prioritize building trust by delivering reliable healthcare services and fostering strong patient relationships.',
      },
    ];
  }
}
