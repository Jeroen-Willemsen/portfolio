import {Component} from '@angular/core';
import {DevelopmentExperienceComponent} from './development-experience/development-experience.component';
import {SideProjectsComponent} from './side-projects/side-projects.component';
import {PopularScienceComponent} from '../linguistics/pop-sci-and-blogs/popular-science/popular-science.component';
import {PublicationsComponent} from '../linguistics/publications/publications.component';
import {TheRetaLanguageComponent} from '../linguistics/the-reta-language/the-reta-language.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-programming',
  standalone: true,
  imports: [
    DevelopmentExperienceComponent,
    SideProjectsComponent,
    PopularScienceComponent,
    PublicationsComponent,
    TheRetaLanguageComponent
  ],
  templateUrl: './programming.component.html',
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
export class ProgrammingComponent {
  selectedTab: string = 'app-development-experience';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
