import {Component} from '@angular/core';
import {HangmanGameComponent} from './hangman-game/hangman-game.component';
import {MemoryGameComponent} from './memory-game/memory-game.component';
import {SnakeGameComponent} from './snake-game/snake-game.component';
import {TicTacToeComponent} from './tic-tac-toe/tic-tac-toe.component';
import {TypingSpeedTestComponent} from './typing-speed-test/typing-speed-test.component';
import {WhackAMoleComponent} from './whack-a-mole/whack-a-mole.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    HangmanGameComponent,
    MemoryGameComponent,
    SnakeGameComponent,
    TicTacToeComponent,
    TypingSpeedTestComponent,
    WhackAMoleComponent,
  ],
  templateUrl: './games.component.html',
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
export class GamesComponent {
  selectedTab: string = 'app-hangman-game';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
