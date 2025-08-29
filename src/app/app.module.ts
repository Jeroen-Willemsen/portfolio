import {AboutMeComponent} from './components/about-me/about-me.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {
  DevelopmentExperienceComponent
} from "./components/programming/development-experience/development-experience.component";
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {LinguisticsComponent} from './components/linguistics/linguistics.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    AboutMeComponent,
    BrowserAnimationsModule,
    BrowserModule,
    ContactMeComponent,
    DevelopmentExperienceComponent,
    HighlightModule,
    LinguisticsComponent,
    MatExpansionModule,
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      languages: {
        python: () => import('highlight.js/lib/languages/python'),
      },
    },
  },
  ]
})
export class AppModule {
}
