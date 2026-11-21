import {Component} from '@angular/core';
import {DevelopmentExperienceComponent} from './development-experience/development-experience.component';
import {SideProjectsComponent} from './side-projects/side-projects.component';

@Component({
  selector: 'app-programming',
  standalone: true,
  imports: [
    DevelopmentExperienceComponent,
    SideProjectsComponent,
  ],
  templateUrl: './programming.component.html',
  styleUrl: '../../app.component.scss'
})
export class ProgrammingComponent {
  selectedTab: string = 'app-development-experience';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
