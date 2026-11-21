import {Component, OnDestroy} from '@angular/core';
import {FormsModule} from '@angular/forms';

const PASSAGES: string[] = [
  'The quick brown fox jumps over the lazy dog. Practice makes perfect, and a little patience goes a long way.',
  'Languages change slowly, one speaker at a time. Every word you use today was once new to someone.',
  'Good code is written for people first and computers second. Clear names save more time than clever tricks.',
  'On the slopes of the volcano, the path climbs steeply past gardens, stone walls, and wooden houses.',
];

@Component({
  selector: 'app-typing-speed-test',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './typing-speed-test.component.html',
  styleUrl: './typing-speed-test.component.scss'
})
export class TypingSpeedTestComponent implements OnDestroy {
  readonly duration = 60;
  text: string = this.pickPassage();
  enteredText: string = '';
  timeLeft: number = this.duration;
  isStarted: boolean = false;
  isFinished: boolean = false;
  wpm: number = 0;
  accuracy: number = 100;
  private timer?: ReturnType<typeof setInterval>;
  private startedAt = 0;

  /** Per-character status for highlighting the passage as the user types. */
  get characters(): { char: string; state: 'correct' | 'wrong' | 'pending' }[] {
    return [...this.text].map((char, i) => ({
      char,
      state: i >= this.enteredText.length ? 'pending' : this.enteredText[i] === char ? 'correct' : 'wrong',
    }));
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  onTextInput(): void {
    if (!this.isStarted) {
      this.isStarted = true;
      this.startedAt = Date.now();
      this.timer = setInterval(() => {
        this.timeLeft--;
        if (this.timeLeft <= 0) {
          this.finish();
        }
      }, 1000);
    }
    this.updateStats();
    if (this.enteredText.length >= this.text.length) {
      this.finish();
    }
  }

  resetTest(): void {
    clearInterval(this.timer);
    this.text = this.pickPassage();
    this.enteredText = '';
    this.timeLeft = this.duration;
    this.isStarted = false;
    this.isFinished = false;
    this.wpm = 0;
    this.accuracy = 100;
  }

  private finish(): void {
    clearInterval(this.timer);
    this.updateStats();
    this.isFinished = true;
  }

  /** Standard WPM: correctly typed characters / 5, per minute elapsed. */
  private updateStats(): void {
    const typed = this.enteredText.length;
    const correct = [...this.enteredText].filter((c, i) => c === this.text[i]).length;
    const minutes = Math.max((Date.now() - this.startedAt) / 60000, 1 / 60);
    this.wpm = Math.round(correct / 5 / minutes);
    this.accuracy = typed ? Math.round((correct / typed) * 100) : 100;
  }

  private pickPassage(): string {
    const others = PASSAGES.filter(p => p !== this.text);
    return others[Math.floor(Math.random() * others.length)];
  }
}
