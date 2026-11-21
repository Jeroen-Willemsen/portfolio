import {AboutMeComponent} from './components/about-me/about-me.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {Routes} from '@angular/router';

// Every page except the landing page is lazy-loaded, so visitors only download the code for what they open.
export const routes: Routes = [
  {path: '', redirectTo: '/about-me', pathMatch: 'full'},
  {path: 'about-me', title: 'About me · Jeroen Willemsen', component: AboutMeComponent},
  {
    path: 'blogs',
    title: 'Blogs · Jeroen Willemsen',
    loadComponent: () => import('./components/linguistics/pop-sci-and-blogs/blogs/blogs.component').then(m => m.BlogsComponent),
  },
  {
    path: 'contact-me',
    title: 'Contact · Jeroen Willemsen',
    loadComponent: () => import('./components/contact-me/contact-me.component').then(m => m.ContactMeComponent),
  },
  {
    path: 'data-engineering-and-architecture',
    title: 'Data engineering & architecture · Jeroen Willemsen',
    loadComponent: () => import('./components/data-engineering/data-engineering.component').then(m => m.DataEngineeringComponent),
  },
  {
    path: 'development-experience',
    title: 'Development experience · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/development-experience/development-experience.component').then(m => m.DevelopmentExperienceComponent),
  },
  {
    path: 'games',
    title: 'Games · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/side-projects/games/games.component').then(m => m.GamesComponent),
  },
  {
    path: 'hangman-game',
    title: 'Hangman · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/side-projects/games/hangman-game/hangman-game.component').then(m => m.HangmanGameComponent),
  },
  {
    path: 'ipa-picker',
    title: 'IPA picker · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/side-projects/py-apps/ipa-picker/ipa-picker.component').then(m => m.IpaPickerLatexConverterComponent),
  },
  {
    path: 'linguistics',
    title: 'Linguistics · Jeroen Willemsen',
    loadComponent: () => import('./components/linguistics/linguistics.component').then(m => m.LinguisticsComponent),
  },
  {
    path: 'memory-game',
    title: 'Memory game · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/side-projects/games/memory-game/memory-game.component').then(m => m.MemoryGameComponent),
  },
  {
    path: 'pop-sci-and-blogs',
    title: 'Popular science & blogs · Jeroen Willemsen',
    loadComponent: () => import('./components/linguistics/pop-sci-and-blogs/pop-sci-and-blogs.component').then(m => m.PopSciAndBlogsComponent),
  },
  {
    path: 'popular-science',
    title: 'Popular science · Jeroen Willemsen',
    loadComponent: () => import('./components/linguistics/pop-sci-and-blogs/popular-science/popular-science.component').then(m => m.PopularScienceComponent),
  },
  {
    path: 'programming',
    title: 'Programming · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/programming.component').then(m => m.ProgrammingComponent),
  },
  {
    path: 'publications',
    title: 'Publications · Jeroen Willemsen',
    loadComponent: () => import('./components/linguistics/publications/publications.component').then(m => m.PublicationsComponent),
  },
  {
    path: 'py-apps',
    title: 'Python applications · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/side-projects/py-apps/py-apps.component').then(m => m.PythonApplicationsComponent),
  },
  {
    path: 'side-dutch-weather-app',
    title: 'Dutch weather app · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/side-projects/py-apps/weather-app/weather-app.component').then(m => m.SimpleDutchWeatherAppComponent),
  },
  {
    path: 'side-projects',
    title: 'Side projects · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/side-projects/side-projects.component').then(m => m.SideProjectsComponent),
  },
  {
    path: 'simple-calculator',
    title: 'Simple calculator · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/side-projects/py-apps/simple-calculator/simple-calculator.component').then(m => m.SimpleCalculatorComponent),
  },
  {
    path: 'snake-game',
    title: 'Snake · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/side-projects/games/snake-game/snake-game.component').then(m => m.SnakeGameComponent),
  },
  {
    path: 'the-reta-language',
    title: 'The Reta language · Jeroen Willemsen',
    loadComponent: () => import('./components/linguistics/the-reta-language/the-reta-language.component').then(m => m.TheRetaLanguageComponent),
  },
  {
    path: 'tic-tac-toe',
    title: 'Tic-tac-toe · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/side-projects/games/tic-tac-toe/tic-tac-toe.component').then(m => m.TicTacToeComponent),
  },
  {
    path: 'typing-speed-test',
    title: 'Typing speed test · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/side-projects/games/typing-speed-test/typing-speed-test.component').then(m => m.TypingSpeedTestComponent),
  },
  {
    path: 'whack-a-mole-game',
    title: 'Whack-a-mole · Jeroen Willemsen',
    loadComponent: () => import('./components/programming/side-projects/games/whack-a-mole/whack-a-mole.component').then(m => m.WhackAMoleComponent),
  },
  {path: '**', title: 'Page not found · Jeroen Willemsen', component: PageNotFoundComponent},
];
