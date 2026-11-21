import {Component, HostListener, OnInit} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-hangman-game',
  standalone: true,
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './hangman-game.component.html',
  styleUrl: './hangman-game.component.scss'
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

  readonly alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  readonly maxAttempts = 6;

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.secretWord =
      this.words[Math.floor(Math.random() * this.words.length)];
    this.displayedWord = Array(this.secretWord.length).fill('_');
    this.attemptsLeft = this.maxAttempts;
    this.guessedLetters = [];
    this.gameOver = false;
    this.won = false;
  }

  /** Lets players type letters on a physical keyboard; Enter starts a new game once it's over. */
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    const key = event.key.toLowerCase();
    if (this.gameOver && key === 'enter') {
      this.newGame();
    } else if (this.alphabet.includes(key)) {
      this.guessLetter(key);
    }
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
