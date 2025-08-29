import {Component} from '@angular/core';
import {SimpleCalculatorComponent} from './simple-calculator/simple-calculator.component';
import {SimpleDutchWeatherAppComponent} from './weather-app/weather-app.component';
import {IpaPickerLatexConverterComponent} from './ipa-picker/ipa-picker.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-py-apps',
  standalone: true,
  imports: [
    IpaPickerLatexConverterComponent,
    SimpleCalculatorComponent,
    SimpleDutchWeatherAppComponent,
  ],
  templateUrl: './py-apps.component.html',
  styleUrl: '../../../../app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class PythonApplicationsComponent {
  selectedTab: string = 'app-ipa-picker';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
