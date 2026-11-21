import {Component} from '@angular/core';
import {SimpleCalculatorComponent} from './simple-calculator/simple-calculator.component';
import {SimpleDutchWeatherAppComponent} from './weather-app/weather-app.component';
import {IpaPickerLatexConverterComponent} from './ipa-picker/ipa-picker.component';

@Component({
  selector: 'app-py-apps',
  standalone: true,
  imports: [
    IpaPickerLatexConverterComponent,
    SimpleCalculatorComponent,
    SimpleDutchWeatherAppComponent,
  ],
  templateUrl: './py-apps.component.html',
  styleUrl: '../../../../app.component.scss'
})
export class PythonApplicationsComponent {
  selectedTab: string = 'app-ipa-picker';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
