import {Component} from '@angular/core';
import {DevelopmentExperienceComponent} from '../programming/development-experience/development-experience.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    DevelopmentExperienceComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class AboutMeComponent {
}
