import {Component} from '@angular/core';
import {PopSciAndBlogsComponent} from './pop-sci-and-blogs/pop-sci-and-blogs.component';
import {TheRetaLanguageComponent} from './the-reta-language/the-reta-language.component';
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
  styleUrl: '../../app.component.scss'
})
export class LinguisticsComponent {
  selectedTab: string = 'app-publications';

  protected selectTab = (tabName: string): void => {
    this.selectedTab = tabName;
  };
}
