import {BlogsComponent} from './blogs/blogs.component';
import {Component, OnInit} from '@angular/core';
import {GamesComponent} from '../../programming/side-projects/games/games.component';
import {PopSciAndBlogService} from '../../../services/pop-sci-and-blog.service';
import {PopularScienceArticle} from '../../../models/popular-science.article';
import {PopularScienceComponent} from './popular-science/popular-science.component';
import {
  PythonApplicationsComponent
} from '../../programming/side-projects/py-apps/py-apps.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-pop-sci-and-blogs',
  standalone: true,
  imports: [
    BlogsComponent,
    GamesComponent,
    PopularScienceComponent,
    PythonApplicationsComponent,
  ],
  templateUrl: './pop-sci-and-blogs.component.html',
  styleUrl: '../../../app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class PopSciAndBlogsComponent implements OnInit {
  selectedTab: string = 'app-popular-science';

  showEnglish: boolean = true;
  showDutch: boolean = true;
  showDanish: boolean = true;
  showCheckboxes: boolean = true;

  articles: PopularScienceArticle[];
  blogsComponentInput: PopularScienceArticle[];
  popsciComponentInput: PopularScienceArticle[];

  constructor(private popularScienceArticleService: PopSciAndBlogService) {
  }

  ngOnInit(): void {
    this.popularScienceArticleService.getOverview()
      .subscribe((docs) => {
        this.articles = docs
          .sort((a, b) => b.year - a.year);
        this.blogsComponentInput = this.articles.filter(article => article.type === "blog");
        this.popsciComponentInput = this.articles.filter(article => article.type === "pop-sci");
      });
  }

  protected selectTab = (tabName: string): void => {
    this.selectedTab = tabName;
    this.resetCheckboxesAndComponentInput();
  };

  protected updateLanguagePreferences = (event: Event, lang: 'en' | 'nl' | 'dk') => {
    const checkbox = event.target as HTMLInputElement;
    switch (lang) {
      case 'en':
        this.showEnglish = checkbox.checked;
        break;
      case 'nl':
        this.showDutch = checkbox.checked;
        break;
      case 'dk':
        this.showDanish = checkbox.checked;
        break;
    }
    this.updateArticleSelection(this.showEnglish, this.showDutch, this.showDanish, this.selectedTab)
  };

  protected updateArticleSelection = (en: boolean, nl: boolean, dk: boolean, tab: string) => {
    const allLanguagesSelected = en && nl && dk;
    switch (tab) {
      case 'app-popular-science':
        if (allLanguagesSelected || (!en && !dk)) {
          this.resetCheckboxesAndComponentInput();
        } else {
          if (en === false) {
            this.popsciComponentInput = [...this.popsciComponentInput]
              .filter(article => article.language !== "English");
          }
          if (dk === false) {
            this.popsciComponentInput = [...this.popsciComponentInput]
              .filter(article => article.language !== "Danish");
          }
        }
        break;
      case 'app-blogs':
        if (allLanguagesSelected || (!en && !nl)) {
          this.resetCheckboxesAndComponentInput();
        } else {
          if (en === false) {
            this.blogsComponentInput = [...this.blogsComponentInput]
              .filter(article => article.language !== "English");
          }
          if (nl === false) {
            this.blogsComponentInput = [...this.blogsComponentInput]
              .filter(article => article.language !== "Dutch");
          }
        }
        break;
    }
  };

  private resetCheckboxesAndComponentInput = (): void => {
    this.showCheckboxes = false;
    setTimeout(() => {
      this.showCheckboxes = true;
      this.blogsComponentInput = [...this.articles]
        .filter(article => article.type === "blog");
      this.popsciComponentInput = [...this.articles]
        .filter(article => article.type === "pop-sci");
      this.showEnglish = true;
      this.showDutch = true;
      this.showDanish = true;
    }, 50)
  };
}
