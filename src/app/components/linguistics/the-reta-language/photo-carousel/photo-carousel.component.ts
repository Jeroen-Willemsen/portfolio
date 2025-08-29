import {CaptionedImage} from '../../../../models/captioned-image.model';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {interval, Subscription} from 'rxjs';
import {CaptionedImageService} from '../../../../services/captioned-image.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-photo-carousel',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './photo-carousel.component.html',
  styleUrl: './photo-carousel.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class PhotoCarouselComponent implements OnInit, OnDestroy {
  protected currentIndex: number = 0;
  protected captionedImages: CaptionedImage[] = [];
  protected isFading: boolean = false;
  private carouselSubscription: Subscription;
  private rotationInterval: number = 10000;

  constructor(private captionedImageService: CaptionedImageService) {
  }

  ngOnInit(): void {
    this.captionedImageService.getCaptionedImages()
      .subscribe((images) => {
        this.captionedImages = images;
      });
    this.startAutoRotate();
    this.preloadImages();
  }

  ngOnDestroy(): void {
    this.stopAutoRotate();
  }

  protected previousImage = (): void => {
    this.isFading = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex === 0)
        ? this.captionedImages.length - 1
        : this.currentIndex - 1;
      this.resetAutoRotate();
      this.isFading = false;
    }, 250);
  };

  protected nextImage = (): void => {
    this.isFading = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.captionedImages.length;
      this.resetAutoRotate();
      this.isFading = false;
    }, 250);
  };

  protected goToImage = (index: number): void => {
    this.isFading = true;
    setTimeout(() => {
      this.currentIndex = index;
      this.resetAutoRotate();
      this.isFading = false;
    }, 250);
  };

  protected onImageError = (event: Event): void => {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/fallback.jpg';
  };

  private startAutoRotate = (): void => {
    this.carouselSubscription = interval(this.rotationInterval)
      .subscribe(() => {
        this.nextImage();
      });
  };

  private stopAutoRotate = (): void => {
    if (this.carouselSubscription) {
      this.carouselSubscription.unsubscribe();
    }
  };

  private resetAutoRotate = (): void => {
    this.stopAutoRotate();
    this.startAutoRotate();
  };

  private preloadImages = (): void => {
    this.captionedImages.forEach((image) => {
      const img = new Image();
      img.src = image.url;
    });
  };
}
