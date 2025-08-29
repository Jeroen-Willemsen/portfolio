import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-whack-a-mole',
  standalone: true,
  imports: [],
  templateUrl: './whack-a-mole.component.html',
  styleUrl: './whack-a-mole.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class WhackAMoleComponent implements OnInit, OnDestroy {
  holes: boolean[] = Array(9).fill(false);
  score: number = 0;
  timeLeft: number = 30;
  gameInterval: any;
  timerInterval: any;
  gameActive: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.endGame();
  }

  startGame(): void {
    this.score = 0;
    this.timeLeft = 30;
    this.gameActive = true;
    this.gameInterval = setInterval(() => this.showMole(), 800);
    this.timerInterval = setInterval(() => this.countDown(), 1000);
  }

  endGame(): void {
    clearInterval(this.gameInterval);
    clearInterval(this.timerInterval);
    this.gameActive = false;
    this.holes = Array(9).fill(false);
  }

  countDown(): void {
    this.timeLeft--;
    if (this.timeLeft === 0) {
      this.endGame();
    }
  }

  showMole(): void {
    this.holes = Array(9).fill(false);
    const index = Math.floor(Math.random() * 9);
    this.holes[index] = true;
    setTimeout(() => {
      this.holes[index] = false;
    }, 700);
  }

  whackMole(index: number): void {
    if (this.holes[index]) {
      this.score++;
      this.holes[index] = false;
    }
  }
}
