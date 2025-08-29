import {AfterViewInit, Component, HostListener} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

export enum DirectionEnum {
  U = "Up",
  D = "Down",
  L = "Left",
  R = "Right"
}

export interface MovingParts {
  x: number;
  y: number;
}

@Component({
  selector: 'app-snake-game',
  standalone: true,
  imports: [],
  templateUrl: './snake-game.component.html',
  styleUrl: './snake-game.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class SnakeGameComponent implements AfterViewInit {
  protected canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D;
  protected box: number = 20;
  protected snake: MovingParts[] = [];
  protected direction: DirectionEnum;
  protected food: MovingParts;
  protected gameInterval: NodeJS.Timeout | number;
  protected score: number = 0;
  protected canvasWidth: number = 1200;
  protected canvasHeight: number = 600;
  protected gameOver: boolean = false;

  ngAfterViewInit(): void {
    this.canvas = <HTMLCanvasElement>document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.initGame();
  }

  initGame: () => void = (): void => {
    if (this.gameInterval) {
      clearInterval(this.gameInterval);
    } // Cleared any existing game intervals
    this.snake = [{x: 9 * this.box, y: 10 * this.box}];
    this.generateFood();
    this.score = 0;
    this.direction = this.getRandomDirection();
    this.gameOver = false; // Reset game over flag
    // Start the game loop
    this.gameInterval = setInterval(() => this.gameLoop(), 100);
  };

  generateFood(): void {
    this.food = {
      x: Math.floor(Math.random() * (this.canvasWidth / this.box)) * this.box,
      y: Math.floor(Math.random() * (this.canvasHeight / this.box)) * this.box,
    };
  }

  @HostListener('document:keydown', ['$event']) handleKeyDown: (event: KeyboardEvent) => void
    = (event: KeyboardEvent): void => {
    const key: number = event.keyCode;
    if (key === 37 && this.direction !== DirectionEnum.R) {
      this.direction = DirectionEnum.L;
    } else if (key === 38 && this.direction !== DirectionEnum.D) {
      this.direction = DirectionEnum.U;
    } else if (key === 39 && this.direction !== DirectionEnum.L) {
      this.direction = DirectionEnum.R;
    } else if (key === 40 && this.direction !== DirectionEnum.U) {
      this.direction = DirectionEnum.D;
    } // Press enter to start new game upon gameOver === true
    if (event.key === 'Enter' && this.gameOver) {
      this.initGame();
    }
  };

  gameLoop: () => void = (): void => {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    for (let i = 0; i < this.snake.length; i++) {
      this.ctx.fillStyle = i === 0 ? 'green' : 'lightgreen';
      this.ctx.fillRect(
        this.snake[i].x,
        this.snake[i].y,
        this.box,
        this.box
      );
    }

    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.food.x, this.food.y, this.box, this.box);

    let snakeX: number = this.snake[0].x;
    let snakeY: number = this.snake[0].y;

    if (this.direction === DirectionEnum.L) snakeX -= this.box;
    if (this.direction === DirectionEnum.U) snakeY -= this.box;
    if (this.direction === DirectionEnum.R) snakeX += this.box;
    if (this.direction === DirectionEnum.D) snakeY += this.box;

    // Check collision with walls or self
    if (
      snakeX < 0 ||
      snakeY < 0 ||
      snakeX >= this.canvasWidth ||
      snakeY >= this.canvasHeight ||
      this.collision({x: snakeX, y: snakeY}, this.snake)
    ) {
      clearInterval(this.gameInterval);
      this.gameOver = true; // Set game over flag
      return;
    }

    let newHead: MovingParts = {x: snakeX, y: snakeY};

    // Check if snake eats food
    if (snakeX === this.food.x && snakeY === this.food.y) {
      this.score++;
      this.generateFood();
    } else {
      this.snake.pop();
    }
    this.snake.unshift(newHead);
  };

  collision: (head: MovingParts, array: MovingParts[]) => boolean
    = (head: MovingParts, array: MovingParts[]): boolean => {
    for (let i: number = 0; i < array.length; i++) {
      if (head.x === array[i].x && head.y === array[i].y) {
        return true;
      }
    }
    return false;
  };

  private getRandomDirection: () => DirectionEnum = () => {
    const directionArray: DirectionEnum[] = Object.values(DirectionEnum);
    const randomNumber: number = Math.floor(Math.random() * directionArray.length);
    return directionArray[randomNumber];
  }
}
