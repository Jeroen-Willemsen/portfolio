import {Component, Input} from '@angular/core';
import {PopularScienceArticle} from '../../../../models/popular-science.article';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-popular-science',
  standalone: true,
  imports: [],
  templateUrl: './popular-science.component.html',
  styleUrl: './popular-science.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class PopularScienceComponent {
  @Input() articles: PopularScienceArticle[];
}
