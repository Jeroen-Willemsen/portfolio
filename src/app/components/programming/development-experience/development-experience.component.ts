import {Component, OnInit} from '@angular/core';
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
  protected developmentExperienceCategories: DevelopmentExperienceCategory[] = [];
  protected panelsVisible: boolean = false;

  constructor(private developmentExperienceService: DevelopmentExperienceService) {
  }

  ngOnInit(): void {
    this.developmentExperienceService.getExperienceCategories()
      .subscribe((experiences) => {
        this.developmentExperienceCategories = experiences;
        setTimeout(() => {
          this.panelsVisible = true;
        }, 50)
      });
  }
}
