import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {PublicationService} from '../../../services/publication.service';
import {Publication} from '../../../models/publication.model';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class PublicationsComponent implements OnInit {
  publications: Publication[] = [];

  constructor(private publicationService: PublicationService) {
  }

  ngOnInit(): void {
    this.publicationService.getPublications()
      .subscribe((docs) => {
        this.publications = docs
          .sort((a, b) => b.year - a.year);
      });
  }
}
