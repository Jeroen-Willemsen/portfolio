import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';

export enum DirectionEnum {
  U = 'Up',
  D = 'Down',
  L = 'Left',
  R = 'Right'
}

export interface MovingParts {
  x: number;
  y: number;
}

const OPPOSITE: Record<DirectionEnum, DirectionEnum> = {
  [DirectionEnum.U]: DirectionEnum.D,
  [DirectionEnum.D]: DirectionEnum.U,
  [DirectionEnum.L]: DirectionEnum.R,
  [DirectionEnum.R]: DirectionEnum.L,
};

const KEY_TO_DIRECTION: Record<string, DirectionEnum> = {
  ArrowUp: DirectionEnum.U, w: DirectionEnum.U, W: DirectionEnum.U,
  ArrowDown: DirectionEnum.D, s: DirectionEnum.D, S: DirectionEnum.D,
  ArrowLeft: DirectionEnum.L, a: DirectionEnum.L, A: DirectionEnum.L,
  ArrowRight: DirectionEnum.R, d: DirectionEnum.R, D: DirectionEnum.R,
};

const HIGH_SCORE_KEY = 'snake-high-score';

@Component({
  selector: 'app-snake-game',
  standalone: true,
  imports: [],
  templateUrl: './snake-game.component.html',
  styleUrl: './snake-game.component.scss'
})
export class SnakeGameComponent implements AfterViewInit, OnDestroy {
  @ViewChild('gameCanvas') private canvasRef: ElementRef<HTMLCanvasElement>;

  protected readonly box: number = 20;
  protected readonly canvasWidth: number = 1200;
  protected readonly canvasHeight: number = 600;
  protected readonly directions = DirectionEnum;
  protected score: number = 0;
  protected highScore: number = SnakeGameComponent.loadHighScore();
  protected gameOver: boolean = false;

  private ctx: CanvasRenderingContext2D;
  private snake: MovingParts[] = [];
  private food: MovingParts;
  private direction: DirectionEnum;
  /** Turns requested since the last tick; queued so fast key presses can't reverse the snake into itself. */
  private directionQueue: DirectionEnum[] = [];
  private gameInterval?: ReturnType<typeof setInterval>;

  private static loadHighScore(): number {
    try {
      return Number(localStorage.getItem(HIGH_SCORE_KEY)) || 0;
    } catch {
      return 0;
    }
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.initGame();
  }

  ngOnDestroy(): void {
    clearInterval(this.gameInterval);
  }

  initGame = (): void => {
    clearInterval(this.gameInterval);
    this.snake = [{x: 9 * this.box, y: 10 * this.box}];
    this.generateFood();
    this.score = 0;
    this.direction = this.getRandomDirection();
    this.directionQueue = [];
    this.gameOver = false;
    this.gameInterval = setInterval(() => this.gameLoop(), 100);
  };

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    const requested = KEY_TO_DIRECTION[event.key];
    if (requested) {
      event.preventDefault(); // Stop the arrow keys from scrolling the page while playing.
      this.turn(requested);
    } else if (event.key === 'Enter' && this.gameOver) {
      this.initGame();
    }
  }

  /** Also used by the on-screen buttons for touch devices. */
  protected turn(requested: DirectionEnum): void {
    const last = this.directionQueue.at(-1) ?? this.direction;
    if (requested !== last && requested !== OPPOSITE[last] && this.directionQueue.length < 3) {
      this.directionQueue.push(requested);
    }
  }

  private generateFood(): void {
    do {
      this.food = {
        x: Math.floor(Math.random() * (this.canvasWidth / this.box)) * this.box,
        y: Math.floor(Math.random() * (this.canvasHeight / this.box)) * this.box,
      };
    } while (this.collision(this.food, this.snake)); // Never spawn food inside the snake.
  }

  private gameLoop(): void {
    if (this.directionQueue.length) {
      this.direction = this.directionQueue.shift();
    }

    let {x: snakeX, y: snakeY} = this.snake[0];
    if (this.direction === DirectionEnum.L) snakeX -= this.box;
    if (this.direction === DirectionEnum.U) snakeY -= this.box;
    if (this.direction === DirectionEnum.R) snakeX += this.box;
    if (this.direction === DirectionEnum.D) snakeY += this.box;
    const newHead: MovingParts = {x: snakeX, y: snakeY};

    const ateFood = snakeX === this.food.x && snakeY === this.food.y;
    // The tail moves out of the way this tick unless the snake grows, so it doesn't count as a collision.
    const body = ateFood ? this.snake : this.snake.slice(0, -1);
    if (
      snakeX < 0 ||
      snakeY < 0 ||
      snakeX >= this.canvasWidth ||
      snakeY >= this.canvasHeight ||
      this.collision(newHead, body)
    ) {
      this.endGame();
      return;
    }

    this.snake.unshift(newHead);
    if (ateFood) {
      this.score++;
      this.generateFood();
    } else {
      this.snake.pop();
    }
    this.draw();
  }

  private draw(): void {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.snake.forEach((part, i) => {
      this.ctx.fillStyle = i === 0 ? 'green' : 'lightgreen';
      this.ctx.fillRect(part.x, part.y, this.box, this.box);
    });
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.food.x, this.food.y, this.box, this.box);
  }

  private endGame(): void {
    clearInterval(this.gameInterval);
    this.gameOver = true;
    if (this.score > this.highScore) {
      this.highScore = this.score;
      try {
        localStorage.setItem(HIGH_SCORE_KEY, String(this.highScore));
      } catch {
        // Storage unavailable (e.g. private mode); keep the in-memory high score.
      }
    }
  }

  private collision(head: MovingParts, parts: MovingParts[]): boolean {
    return parts.some(part => part.x === head.x && part.y === head.y);
  }

  private getRandomDirection(): DirectionEnum {
    const directionArray: DirectionEnum[] = Object.values(DirectionEnum);
    return directionArray[Math.floor(Math.random() * directionArray.length)];
  }
}
