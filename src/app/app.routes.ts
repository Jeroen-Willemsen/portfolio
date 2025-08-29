import {AboutMeComponent} from './components/about-me/about-me.component';
import {BlogsComponent} from './components/linguistics/pop-sci-and-blogs/blogs/blogs.component';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {
  DevelopmentExperienceComponent
} from './components/programming/development-experience/development-experience.component';
import {GamesComponent} from './components/programming/side-projects/games/games.component';
import {HangmanGameComponent} from './components/programming/side-projects/games/hangman-game/hangman-game.component';
import {
  IpaPickerLatexConverterComponent
} from './components/programming/side-projects/py-apps/ipa-picker/ipa-picker.component';
import {LinguisticsComponent} from './components/linguistics/linguistics.component';
import {MemoryGameComponent} from './components/programming/side-projects/games/memory-game/memory-game.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {PopSciAndBlogsComponent} from './components/linguistics/pop-sci-and-blogs/pop-sci-and-blogs.component';
import {
  PopularScienceComponent
} from './components/linguistics/pop-sci-and-blogs/popular-science/popular-science.component';
import {ProgrammingComponent} from './components/programming/programming.component';
import {PublicationsComponent} from './components/linguistics/publications/publications.component';
import {
  PythonApplicationsComponent
} from './components/programming/side-projects/py-apps/py-apps.component';
import {Routes} from '@angular/router';
import {SideProjectsComponent} from './components/programming/side-projects/side-projects.component';
import {
  SimpleCalculatorComponent
} from './components/programming/side-projects/py-apps/simple-calculator/simple-calculator.component';
import {
  SimpleDutchWeatherAppComponent
} from './components/programming/side-projects/py-apps/weather-app/weather-app.component';
import {SnakeGameComponent} from './components/programming/side-projects/games/snake-game/snake-game.component';
import {TheRetaLanguageComponent} from './components/linguistics/the-reta-language/the-reta-language.component';
import {TicTacToeComponent} from './components/programming/side-projects/games/tic-tac-toe/tic-tac-toe.component';
import {
  TypingSpeedTestComponent
} from './components/programming/side-projects/games/typing-speed-test/typing-speed-test.component';
import {WhackAMoleComponent} from './components/programming/side-projects/games/whack-a-mole/whack-a-mole.component';

export const routes: Routes = [
  {path: '', redirectTo: '/about-me', pathMatch: 'full'},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'contact-me', component: ContactMeComponent},
  {path: 'development-experience', component: DevelopmentExperienceComponent},
  {path: 'games', component: GamesComponent},
  {path: 'hangman-game', component: HangmanGameComponent},
  {path: 'ipa-picker', component: IpaPickerLatexConverterComponent},
  {path: 'linguistics', component: LinguisticsComponent},
  {path: 'memory-game', component: MemoryGameComponent},
  {path: 'pop-sci-and-blogs', component: PopSciAndBlogsComponent},
  {path: 'popular-science', component: PopularScienceComponent},
  {path: 'programming', component: ProgrammingComponent},
  {path: 'publications', component: PublicationsComponent},
  {path: 'py-apps', component: PythonApplicationsComponent},
  {path: 'side-dutch-weather-app', component: SimpleDutchWeatherAppComponent},
  {path: 'side-projects', component: SideProjectsComponent},
  {path: 'simple-calculator', component: SimpleCalculatorComponent},
  {path: 'snake-game', component: SnakeGameComponent},
  {path: 'the-reta-language', component: TheRetaLanguageComponent},
  {path: 'tic-tac-toe', component: TicTacToeComponent},
  {path: 'typing-speed-test', component: TypingSpeedTestComponent},
  {path: 'whack-a-mole-game', component: WhackAMoleComponent},
  {path: '**', component: PageNotFoundComponent},
];
