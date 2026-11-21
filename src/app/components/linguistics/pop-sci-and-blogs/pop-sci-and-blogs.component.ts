import {BlogsComponent} from './blogs/blogs.component';
import {Component, OnInit} from '@angular/core';
import {PopSciAndBlogService} from '../../../services/pop-sci-and-blog.service';
import {PopularScienceArticle} from '../../../models/popular-science.article';
import {PopularScienceComponent} from './popular-science/popular-science.component';

type Tab = 'app-popular-science' | 'app-blogs';
type Language = PopularScienceArticle['language'];

@Component({
  selector: 'app-pop-sci-and-blogs',
  standalone: true,
  imports: [
    BlogsComponent,
    PopularScienceComponent,
  ],
  templateUrl: './pop-sci-and-blogs.component.html',
  styleUrl: '../../../app.component.scss'
})
export class PopSciAndBlogsComponent implements OnInit {
  selectedTab: Tab = 'app-popular-science';
  articles: PopularScienceArticle[] = [];
  /** Languages currently ticked; every language starts out selected. */
  selectedLanguages = new Set<Language>(['English', 'Dutch', 'Danish']);

  constructor(private popularScienceArticleService: PopSciAndBlogService) {
  }

  /** The languages that actually occur in the current tab, so we only offer useful checkboxes. */
  get availableLanguages(): Language[] {
    const languages = this.articlesOfType(this.currentType).map(article => article.language);
    return [...new Set(languages)];
  }

  get popsciComponentInput(): PopularScienceArticle[] {
    return this.filtered('pop-sci');
  }

  get blogsComponentInput(): PopularScienceArticle[] {
    return this.filtered('blog');
  }

  private get currentType(): PopularScienceArticle['type'] {
    return this.selectedTab === 'app-blogs' ? 'blog' : 'pop-sci';
  }

  ngOnInit(): void {
    this.popularScienceArticleService.getOverview()
      .subscribe((docs) => {
        this.articles = [...docs].sort((a, b) => b.year - a.year);
      });
  }

  protected selectTab(tabName: Tab): void {
    this.selectedTab = tabName;
  }

  protected toggleLanguage(language: Language, checked: boolean): void {
    if (checked) {
      this.selectedLanguages.add(language);
    } else {
      this.selectedLanguages.delete(language);
    }
  }

  private articlesOfType(type: PopularScienceArticle['type']): PopularScienceArticle[] {
    return this.articles.filter(article => article.type === type);
  }

  private filtered(type: PopularScienceArticle['type']): PopularScienceArticle[] {
    return this.articlesOfType(type).filter(article => this.selectedLanguages.has(article.language));
  }
}
