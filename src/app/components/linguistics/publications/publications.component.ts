import {Component, OnInit} from '@angular/core';
import {PublicationService} from '../../../services/publication.service';
import {Publication} from '../../../models/publication.model';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
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
