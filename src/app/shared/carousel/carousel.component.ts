import { Component, Input } from '@angular/core';
import { ISlide } from './slide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() slides: ISlide[] = [];
}
