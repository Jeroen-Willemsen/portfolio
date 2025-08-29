import {Component, Input} from '@angular/core';
import {PopularScienceArticle} from '../../../../models/popular-science.article';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})

export class BlogsComponent {
  @Input() articles: PopularScienceArticle[];
}
