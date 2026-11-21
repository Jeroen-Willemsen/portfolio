import {Component} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {DataEngineeringExperienceService} from '../../services/data-engineering-experience.service';
import {DevelopmentExperienceComponent} from '../programming/development-experience/development-experience.component';

type Tab = 'data-engineering' | 'architecture';

@Component({
  selector: 'app-data-engineering',
  standalone: true,
  imports: [
    DevelopmentExperienceComponent,
  ],
  templateUrl: './data-engineering.component.html',
  styleUrl: '../../app.component.scss'
})
export class DataEngineeringComponent {
  selectedTab: Tab = 'data-engineering';

  protected readonly dataEngineeringCategories;
  protected readonly architectureCategories;

  constructor(service: DataEngineeringExperienceService) {
    this.dataEngineeringCategories = toSignal(service.getDataEngineeringCategories(), {initialValue: []});
    this.architectureCategories = toSignal(service.getArchitectureCategories(), {initialValue: []});
  }

  selectTab(tabName: Tab): void {
    this.selectedTab = tabName;
  }
}
