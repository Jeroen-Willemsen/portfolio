import {Component, OnInit} from '@angular/core';
import {Card} from '../../../../../models/card.model';
import {NgForOf} from '@angular/common';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-memory-game',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './memory-game.component.html',
  styleUrl: './memory-game.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class MemoryGameComponent implements OnInit {
  cards: Card[] = [];
  flippedCards: Card[] = [];
  images: string[] = [
    '🍎',
    '🍌',
    '🍇',
    '🍓',
    '🍍',
    '🥑',
    '🍒',
    '🍉',
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.cards = [];
    const cardImages = [...this.images, ...this.images]; // Duplicate images
    cardImages.sort(() => 0.5 - Math.random()); // Shuffle images

    cardImages.forEach((image, index) => {
      this.cards.push({
        id: index,
        image: image,
        flipped: false,
        matched: false,
      });
    });
  }

  flipCard(card: Card): void {
    if (card.flipped || card.matched || this.flippedCards.length === 2) {
      return;
    }

    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkForMatch();
    }
  }

  checkForMatch(): void {
    const [card1, card2] = this.flippedCards;

    if (card1.image === card2.image) {
      card1.matched = true;
      card2.matched = true;
    } else {
      setTimeout(() => {
        card1.flipped = false;
        card2.flipped = false;
      }, 1000);
    }

    this.flippedCards = [];
  }
}

