import {Component} from '@angular/core';
import {GamesComponent} from './games/games.component';
import {PythonApplicationsComponent} from './py-apps/py-apps.component';

@Component({
  selector: 'app-side-projects',
  standalone: true,
  imports: [
    GamesComponent,
    PythonApplicationsComponent
  ],
  templateUrl: './side-projects.component.html',
  styleUrl: '../../../app.component.scss'
})
export class SideProjectsComponent {
  selectedTab: string = 'app-games';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
