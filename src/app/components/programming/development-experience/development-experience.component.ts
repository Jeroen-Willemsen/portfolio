import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevelopmentExperienceService} from '../../../services/development-experience.service';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {DevelopmentExperienceCategory} from '../../../models/development-experience.model';

@Component({
  selector: 'app-development-experience',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatAccordion,
  ],
  templateUrl: './development-experience.component.html',
  styleUrl: '../../../app.component.scss'
})
export class DevelopmentExperienceComponent implements OnInit {
  /**
   * Categories to show. When left out, the component shows the programming experience
   * from DevelopmentExperienceService, so other pages can reuse the same cards with their own content.
   */
  @Input() categories?: DevelopmentExperienceCategory[];

  protected developmentExperienceCategories: DevelopmentExperienceCategory[] = [];
  protected panelsVisible: boolean = false;

  constructor(private developmentExperienceService: DevelopmentExperienceService) {
  }

  ngOnInit(): void {
    if (this.categories) {
      this.show(this.categories);
    } else {
      this.developmentExperienceService.getExperienceCategories()
        .subscribe((experiences) => this.show(experiences));
    }
  }

  private show(categories: DevelopmentExperienceCategory[]): void {
    this.developmentExperienceCategories = categories;
    setTimeout(() => {
      this.panelsVisible = true;
    }, 50);
  }
}
