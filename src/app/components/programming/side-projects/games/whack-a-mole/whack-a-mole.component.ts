import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-whack-a-mole',
  standalone: true,
  imports: [],
  templateUrl: './whack-a-mole.component.html',
  styleUrl: './whack-a-mole.component.scss'
})
export class WhackAMoleComponent implements OnDestroy {
  readonly gameLength = 30;
  holes: boolean[] = Array(9).fill(false);
  score: number = 0;
  timeLeft: number = this.gameLength;
  gameActive: boolean = false;
  hasPlayed: boolean = false;
  private gameInterval?: ReturnType<typeof setInterval>;
  private timerInterval?: ReturnType<typeof setInterval>;
  private hideTimeout?: ReturnType<typeof setTimeout>;

  ngOnDestroy(): void {
    this.endGame();
  }

  startGame(): void {
    this.endGame();
    this.score = 0;
    this.timeLeft = this.gameLength;
    this.gameActive = true;
    this.hasPlayed = true;
    this.gameInterval = setInterval(() => this.showMole(), 800);
    this.timerInterval = setInterval(() => this.countDown(), 1000);
  }

  endGame(): void {
    clearInterval(this.gameInterval);
    clearInterval(this.timerInterval);
    clearTimeout(this.hideTimeout);
    this.gameActive = false;
    this.holes = Array(9).fill(false);
  }

  whackMole(index: number): void {
    if (this.gameActive && this.holes[index]) {
      this.score++;
      this.holes[index] = false;
    }
  }

  private countDown(): void {
    this.timeLeft--;
    if (this.timeLeft === 0) {
      this.endGame();
    }
  }

  private showMole(): void {
    clearTimeout(this.hideTimeout);
    this.holes = Array(9).fill(false);
    const index = Math.floor(Math.random() * 9);
    this.holes[index] = true;
    this.hideTimeout = setTimeout(() => this.holes[index] = false, 700);
  }
}
