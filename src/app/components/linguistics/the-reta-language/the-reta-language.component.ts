import {Component} from '@angular/core';
import {PhotoCarouselComponent} from './photo-carousel/photo-carousel.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-the-reta-language',
  standalone: true,
  imports: [
    PhotoCarouselComponent
  ],
  templateUrl: './the-reta-language.component.html',
  styleUrl: './the-reta-language.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class TheRetaLanguageComponent {
}
