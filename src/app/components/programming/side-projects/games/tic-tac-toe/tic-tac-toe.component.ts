import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss'
})
export class TicTacToeComponent implements OnInit {
  private static readonly LINES: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6],            // Diagonals
  ];

  board: (string | null)[] = [];
  playerTurn: 'X' | 'O' = 'X';
  winner: 'X' | 'O' | 'Draw' | undefined;
  winningLine: number[] = [];

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.board = Array(9).fill(null);
    this.playerTurn = 'X';
    this.winner = undefined;
    this.winningLine = [];
  }

  makeMove(idx: number): void {
    if (this.board[idx] || this.winner) {
      return;
    }
    this.board[idx] = this.playerTurn;
    const line = this.findWinningLine();
    if (line) {
      this.winner = this.playerTurn;
      this.winningLine = line;
    } else if (this.board.every((cell) => cell)) {
      this.winner = 'Draw';
    } else {
      this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X';
    }
  }

  private findWinningLine(): number[] | undefined {
    return TicTacToeComponent.LINES.find(([a, b, c]) =>
      this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]);
  }
}
