import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class TicTacToeComponent implements OnInit {
  board: string[] | undefined;
  playerTurn: string | undefined;
  winner: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.board = Array(9).fill(null);
    this.playerTurn = 'X';
    this.winner = undefined;
  }

  makeMove(idx: number): void {
    if (!this.board[idx] && !this.winner) {
      this.board[idx] = this.playerTurn;
      if (this.checkWinner()) {
        this.winner = this.playerTurn;
      } else if (this.board.every((cell) => cell)) {
        this.winner = 'Draw';
      } else {
        this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    const lines = [
      [0, 1, 2], // Rows
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6], // Columns
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8], // Diagonals
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return true;
      }
    }
    return false;
  }
}
