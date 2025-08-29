import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-hangman-game',
  standalone: true,
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './hangman-game.component.html',
  styleUrl: './hangman-game.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class HangmanGameComponent implements OnInit {
  words: string[] = [
    "apple",
    "banana",
    "cherry",
    "dragon",
    "eagle",
    "forest",
    "galaxy",
    "horizon",
    "island",
    "jungle",
    "kangaroo",
    "lemon",
    "mountain",
    "nebula",
    "ocean",
    "puzzle",
    "quartz",
    "rainbow",
    "sunflower",
    "tiger",
    "umbrella",
    "violin",
    "whisper",
    "xylophone",
    "yacht",
    "zephyr",
    "anchor",
    "butterfly",
    "canyon",
    "dolphin",
    "emerald",
    "firefly",
    "gazelle",
    "harmony",
    "illusion",
    "journey",
    "kayak",
    "lantern",
    "miracle",
    "nectar",
    "orchid",
    "paradox",
    "quiver",
    "ripple",
    "sapphire",
    "twilight",
    "utopia",
    "vortex",
    "wanderlust",
    "xenon",
    "yonder",
    "zenith",
    "alchemy",
    "breeze",
    "cascade",
    "dewdrop",
    "echo",
    "fjord",
    "glimmer",
    "harbor",
    "iris",
    "jewel",
    "keystone",
    "lullaby",
    "meadow",
    "nocturne",
    "opal",
    "prairie",
    "quartzite",
    "raven",
    "silhouette",
    "tangelo",
    "umbra",
    "velvet",
    "whimsy",
    "xylem",
    "yearning",
    "zen",
    "amethyst",
    "blossom",
    "cascade",
    "dawn",
    "ember",
    "fable",
    "glade",
    "hollow",
    "ivy",
    "jasmine",
    "kismet",
    "lavender",
    "moss",
    "nimbus",
    "orchid",
    "pine",
    "quill",
    "rustle",
    "sprout",
    "thorn",
    "urban",
    "vista",
    "willow",
    "xanadu"
  ];
  secretWord: string;
  displayedWord: string[];
  attemptsLeft: number;
  guessedLetters: string[] = [];
  gameOver: boolean;
  won: boolean;

  constructor() {
  }

  get alphabet(): string[] {
    return 'abcdefghijklmnopqrstuvwxyz'.split('');
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.secretWord =
      this.words[Math.floor(Math.random() * this.words.length)];
    this.displayedWord = Array(this.secretWord.length).fill('_');
    this.attemptsLeft = 6;
    this.guessedLetters = [];
    this.gameOver = false;
    this.won = false;
  }

  guessLetter(letter: string): void {
    if (this.gameOver || this.guessedLetters.includes(letter)) {
      return;
    }

    this.guessedLetters.push(letter);

    if (this.secretWord.includes(letter)) {
      for (let i = 0; i < this.secretWord.length; i++) {
        if (this.secretWord[i] === letter) {
          this.displayedWord[i] = letter;
        }
      }

      if (!this.displayedWord.includes('_')) {
        this.gameOver = true;
        this.won = true;
      }
    } else {
      this.attemptsLeft--;

      if (this.attemptsLeft === 0) {
        this.gameOver = true;
      }
    }
  }
}
