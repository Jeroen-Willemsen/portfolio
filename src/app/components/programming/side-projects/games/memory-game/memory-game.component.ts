import {Component, OnDestroy, OnInit} from '@angular/core';
import {Card} from '../../../../../models/card.model';

@Component({
  selector: 'app-memory-game',
  standalone: true,
  imports: [],
  templateUrl: './memory-game.component.html',
  styleUrl: './memory-game.component.scss'
})
export class MemoryGameComponent implements OnInit, OnDestroy {
  cards: Card[] = [];
  flippedCards: Card[] = [];
  moves = 0;
  private flipBackTimeout?: ReturnType<typeof setTimeout>;
  readonly images: string[] = ['🍎', '🍌', '🍇', '🍓', '🍍', '🥑', '🍒', '🍉'];

  get won(): boolean {
    return this.cards.length > 0 && this.cards.every(card => card.matched);
  }

  ngOnInit(): void {
    this.startGame();
  }

  ngOnDestroy(): void {
    clearTimeout(this.flipBackTimeout);
  }

  startGame(): void {
    clearTimeout(this.flipBackTimeout);
    this.flippedCards = [];
    this.moves = 0;
    this.cards = this.shuffle([...this.images, ...this.images])
      .map((image, index) => ({id: index, image, flipped: false, matched: false}));
  }

  flipCard(card: Card): void {
    // Ignore clicks while two unmatched cards are still face up.
    if (card.flipped || card.matched || this.flippedCards.length === 2) {
      return;
    }
    card.flipped = true;
    this.flippedCards.push(card);
    if (this.flippedCards.length === 2) {
      this.moves++;
      this.checkForMatch();
    }
  }

  private checkForMatch(): void {
    const [card1, card2] = this.flippedCards;
    if (card1.image === card2.image) {
      card1.matched = card2.matched = true;
      this.flippedCards = [];
    } else {
      this.flipBackTimeout = setTimeout(() => {
        card1.flipped = card2.flipped = false;
        this.flippedCards = [];
      }, 1000);
    }
  }

  /** Fisher–Yates shuffle: unbiased, unlike sort(() => 0.5 - Math.random()). */
  private shuffle<T>(items: T[]): T[] {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }
}
