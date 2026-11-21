import {Component, Input} from '@angular/core';
import {PopularScienceArticle} from '../../../../models/popular-science.article';

@Component({
  selector: 'app-popular-science',
  standalone: true,
  imports: [],
  templateUrl: './popular-science.component.html',
  styleUrl: './popular-science.component.scss'
})
export class PopularScienceComponent {
  @Input() articles: PopularScienceArticle[];
}
