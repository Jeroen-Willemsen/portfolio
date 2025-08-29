import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-typing-speed-test',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './typing-speed-test.component.html',
  styleUrl: './typing-speed-test.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class TypingSpeedTestComponent implements OnInit {
  text: string =
    'The quick brown fox jumps over the lazy dog. Practice makes perfect.';
  enteredText: string = '';
  timeLeft: number = 60;
  timer: any;
  isStarted: boolean = false;
  wpm: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  startTest(): void {
    if (!this.isStarted) {
      this.isStarted = true;
      this.timer = setInterval(() => {
        this.timeLeft--;
        if (this.timeLeft === 0) {
          clearInterval(this.timer);
          this.calculateWPM();
        }
      }, 1000);
    }
  }

  onTextInput(): void {
    this.startTest();
  }

  calculateWPM(): void {
    const wordsTyped = this.enteredText.trim().split(/\s+/).length;
    const timeTaken = (60 - this.timeLeft) / 60; // in minutes
    this.wpm = Math.round(wordsTyped / timeTaken);
  }

  resetTest(): void {
    this.enteredText = '';
    this.timeLeft = 60;
    this.isStarted = false;
    this.wpm = 0;
    clearInterval(this.timer);
  }
}
