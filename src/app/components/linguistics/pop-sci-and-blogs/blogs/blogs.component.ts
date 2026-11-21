import {Component, Input} from '@angular/core';
import {PopularScienceArticle} from '../../../../models/popular-science.article';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})

export class BlogsComponent {
  @Input() articles: PopularScienceArticle[];
}
