import {Component} from '@angular/core';
import {PopSciAndBlogsComponent} from './pop-sci-and-blogs/pop-sci-and-blogs.component';
import {TheRetaLanguageComponent} from './the-reta-language/the-reta-language.component';
import {animate, style, transition, trigger} from '@angular/animations';
import {PublicationsComponent} from './publications/publications.component';

@Component({
  selector: 'app-linguistics',
  standalone: true,
  imports: [
    TheRetaLanguageComponent,
    PopSciAndBlogsComponent,
    PublicationsComponent
  ],
  templateUrl: './linguistics.component.html',
  styleUrl: '../../app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class LinguisticsComponent {
  selectedTab: string = 'app-publications';

  protected selectTab = (tabName: string): void => {
    this.selectedTab = tabName;
  };
}
