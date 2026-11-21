import {CaptionedImage} from '../../../../models/captioned-image.model';
import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {interval, Subscription} from 'rxjs';
import {CaptionedImageService} from '../../../../services/captioned-image.service';

@Component({
  selector: 'app-photo-carousel',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './photo-carousel.component.html',
  styleUrl: './photo-carousel.component.scss'
})
export class PhotoCarouselComponent implements OnInit, OnDestroy {
  protected currentIndex: number = 0;
  protected captionedImages: CaptionedImage[] = [];
  protected isFading: boolean = false;
  protected isPaused: boolean = false;
  private carouselSubscription?: Subscription;
  private fadeTimeout?: ReturnType<typeof setTimeout>;
  private readonly rotationInterval: number = 10000;
  private readonly fadeDuration: number = 250;

  constructor(private captionedImageService: CaptionedImageService) {
  }

  ngOnInit(): void {
    this.captionedImageService.getCaptionedImages()
      .subscribe((images) => {
        this.captionedImages = images;
        this.preloadNeighbours();
      });
    // Respect users who have asked their OS for less motion: no auto-advance.
    if (!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      this.startAutoRotate();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoRotate();
    clearTimeout(this.fadeTimeout);
  }

  @HostListener('document:keydown.arrowleft')
  protected previousImage(): void {
    this.goToImage((this.currentIndex - 1 + this.captionedImages.length) % this.captionedImages.length);
  }

  @HostListener('document:keydown.arrowright')
  protected nextImage(): void {
    this.goToImage((this.currentIndex + 1) % this.captionedImages.length);
  }

  protected goToImage(index: number): void {
    if (!this.captionedImages.length || index === this.currentIndex) {
      return;
    }
    this.isFading = true;
    clearTimeout(this.fadeTimeout);
    this.fadeTimeout = setTimeout(() => {
      this.currentIndex = index;
      this.isFading = false;
      this.preloadNeighbours();
      if (this.carouselSubscription) {
        this.resetAutoRotate();
      }
    }, this.fadeDuration);
  }

  /** Pause auto-rotation while the user is looking at / interacting with the carousel. */
  protected setPaused(paused: boolean): void {
    this.isPaused = paused;
  }

  protected onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/fallback.jpg';
  }

  private startAutoRotate(): void {
    this.carouselSubscription = interval(this.rotationInterval)
      .subscribe(() => {
        if (!this.isPaused) {
          this.nextImage();
        }
      });
  }

  private stopAutoRotate(): void {
    this.carouselSubscription?.unsubscribe();
  }

  private resetAutoRotate(): void {
    this.stopAutoRotate();
    this.startAutoRotate();
  }

  /** Only warm the cache for the previous and next photo instead of downloading all of them up front. */
  private preloadNeighbours(): void {
    const count = this.captionedImages.length;
    if (!count) {
      return;
    }
    [this.currentIndex + 1, this.currentIndex - 1 + count].forEach((i) => {
      const img = new Image();
      img.src = this.captionedImages[i % count].url;
    });
  }
}
