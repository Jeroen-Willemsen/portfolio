import {DevelopmentExperienceCategory} from '../models/development-experience.model';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

/**
 * Content for the "Data Engineering & Architecture" page.
 * NOTE: everything below is placeholder text; replace it with real experience.
 */
@Injectable({
  providedIn: 'root'
})
export class DataEngineeringExperienceService {
  private dataEngineeringCategories: DevelopmentExperienceCategory[] = [
    {
      name: 'Data pipelines',
      info: '',
      experiences: [
        {name: 'Ingestion', info: ['Placeholder: sources, batch vs. streaming, tooling used.']},
        {name: 'Transformation', info: ['Placeholder: ETL/ELT approach, frameworks, data quality checks.']},
        {name: 'Orchestration', info: ['Placeholder: schedulers and workflow tools.']},
        {name: 'Other', info: ['Placeholder: anything else pipeline-related.']},
      ]
    },
    {
      name: 'Data storage',
      info: '',
      experiences: [
        {name: 'Data warehouses', info: ['Placeholder: platforms and modelling approach.']},
        {name: 'Data lakes', info: ['Placeholder: storage formats and layering.']},
        {name: 'Time series', info: ['Placeholder: historians and time series databases.']},
        {name: 'Other', info: ['Placeholder: other storage experience.']},
      ]
    },
    {
      name: 'Data projects',
      info: '',
      experiences: [
        {name: 'Project one', info: ['Placeholder: goal, your role, result.']},
        {name: 'Project two', info: ['Placeholder: goal, your role, result.']},
      ]
    },
  ];

  private architectureCategories: DevelopmentExperienceCategory[] = [
    {
      name: 'Solution architecture',
      info: '',
      experiences: [
        {name: 'System design', info: ['Placeholder: types of systems designed and key decisions.']},
        {name: 'Integration', info: ['Placeholder: APIs, messaging, event-driven patterns.']},
        {name: 'Documentation', info: ['Placeholder: architecture decision records, diagrams, C4 models.']},
      ]
    },
    {
      name: 'Data architecture',
      info: '',
      experiences: [
        {name: 'Data modelling', info: ['Placeholder: conceptual, logical and physical models.']},
        {name: 'Governance', info: ['Placeholder: lineage, ownership, access control.']},
        {name: 'Other', info: ['Placeholder: other data architecture work.']},
      ]
    },
    {
      name: 'Cloud & infrastructure',
      info: '',
      experiences: [
        {name: 'Cloud platforms', info: ['Placeholder: platforms and services used.']},
        {name: 'Infrastructure as code', info: ['Placeholder: tooling and practices.']},
        {name: 'Other', info: ['Placeholder: other infrastructure experience.']},
      ]
    },
  ];

  getDataEngineeringCategories(): Observable<DevelopmentExperienceCategory[]> {
    return of(this.dataEngineeringCategories);
  }

  getArchitectureCategories(): Observable<DevelopmentExperienceCategory[]> {
    return of(this.architectureCategories);
  }
}
