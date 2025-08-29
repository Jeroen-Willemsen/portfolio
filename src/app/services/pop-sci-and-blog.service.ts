import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {PopularScienceArticle} from '../models/popular-science.article';

@Injectable({
  providedIn: 'root',
})
export class PopSciAndBlogService {
  private articles: PopularScienceArticle[] = [
    {
      id: 0,
      title: 'Can sounds have meaning? The peculiar case of West-Flemish tj and dj',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/can-sounds-have-meaning-the-peculiar-case-of-west-flemish-tj-and-dj/',
      authors: 'Jeroen Willemsen & Joost Robbe',
      year: 2020,
      language: "English",
      type: "blog"
    },
    {
      id: 1,
      title: '‘Microphone in the Mud’ by Laura Robinson (book review)',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/microphone-in-the-mud-by-laura-robinson/',
      authors: 'Jeroen Willemsen',
      year: 2019,
      language: "English",
      type: "blog"
    },
    {
      id: 2,
      title: '2019 – International Year of Indigenous Languages',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/2019-international-year-of-indigenous-languages/',
      authors: 'Jeroen Willemsen',
      year: 2019,
      language: "English",
      type: "blog"
    },
    {
      id: 3,
      title: 'Fieldwork in a maroon community in Brazil – an interview with Ana Paulla Braga Mattos',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/fieldwork-in-the-amazon-rainforest-an-interview-with-ana-paulla-braga-mattos/',
      authors: ' Jeroen Willemsen, Ana Paulla Braga Mattos & Kristoffer Friis Bøegh',
      year: 2018,
      language: "English",
      type: "blog"
    },
    {
      id: 4,
      title: 'Fieldwork in Saint Croix – an interview with Kristoffer Friis Bøegh',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/fieldwork-in-saint-croix-an-interview-with-kristoffer-friis-boeegh/',
      authors: 'Jeroen Willemsen, Ana Paulla Braga Mattos & Kristoffer Friis Bøegh',
      year: 2018,
      language: "English",
      type: "blog"
    },
    {
      id: 5,
      title: 'Why are there so many different types of “R”?',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/why-are-there-so-many-different-types-of-r/',
      authors: 'Andrea Brink Siem & Jeroen Willemsen',
      year: 2018,
      language: "English",
      type: "blog"
    },
    {
      id: 6,
      title: 'Description, theory and linguistics as a science – an interview with William B. McGregor',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/interview-with-william-mcgregor/',
      authors: 'Jeroen Willemsen',
      year: 2018,
      language: "English",
      type: "blog"
    },
    {
      id: 7,
      title: 'Fieldwork in Nusa Tenggara Timur – an interview with Jeroen Willemsen',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/fieldwork-in-nusa-tenggara-timur-an-interview-with-jeroen-willemsen/',
      authors: ' Jeroen Willemsen, Ana Paulla Braga Mattos & Kristoffer Friis Bøegh',
      year: 2018,
      language: "English",
      type: "blog"
    },
    {
      id: 8,
      title: 'Kunnen klanken betekenis hebben? Het bizarre geval van de West-Vlaamse tj en dj',
      description: 'description',
      url: 'https://www.lingoblog.dk/nl/kunnen-klanken-betekenis-hebben-het-bizarre-geval-van-de-west-vlaamse-tj-en-dj/',
      authors: 'Jeroen Willemsen & Joost Robbe',
      year: 2020,
      language: "Dutch",
      type: "blog"
    },
    {
      id: 9,
      title: '2019 – Internationaal Jaar van de Inheemse Talen',
      description: 'description',
      url: 'https://www.lingoblog.dk/nl/2019-internationaal-jaar-van-de-inheemse-talen/',
      authors: 'Jeroen Willemsen',
      year: 2019,
      language: "Dutch",
      type: "blog"
    },
    {
      id: 10,
      title: '2019 is the UN’s International Year of Indigenous Languages. And we need it to be',
      description: 'description',
      url: 'https://www.sciencenordic.com/denmark-forskerzonen-language/2019-is-the-uns-international-year-of-indigenous-languages-and-we-need-it-to-be/1461854',
      authors: 'Jeroen Willemsen & Kristoffer Friis Bøegh',
      year: 2019,
      language: "English",
      type: "pop-sci"
    },
    {
      id: 11,
      title: 'Sprogforskere advarer: Halvdelen af verdens sprog risikerer at uddø inden udgangen af dette århundrede',
      description: 'description',
      url: 'https://videnskab.dk/kultur-samfund/sprogforskere-advarer-halvdelen-af-verdens-sprog-risikerer-at-uddoe-inden-udgangen-af-dette-aarhundrede/',
      authors: 'Jeroen Willemsen & Kristoffer Friis Bøegh',
      year: 2019,
      language: "Danish",
      type: "pop-sci"
    },
    {
      id: 12,
      title: 'Linguists need preservation of languages to study human language',
      description: 'description',
      url: 'https://www.sciencenordic.com/denmark-forskerzonen-linguistics/linguists-need-preservation-of-languages-to-study-human-language/1553443',
      authors: 'Jeroen Willemsen & Kristoffer Friis Bøegh',
      year: 2019,
      language: "English",
      type: "pop-sci"
    },
    {
      id: 13,
      title: 'Lingvister har brug for sprogbevaring for at studere sprog som menneskeligt fænomen',
      description: 'description',
      url: 'https://videnskab.dk/kultur-samfund/lingvister-har-brug-for-sprogbevaring-for-at-studere-sprog-som-menneskeligt-faenomen/',
      authors: 'Jeroen Willemsen & Kristoffer Friis Bøegh',
      year: 2019,
      language: "Danish",
      type: "pop-sci"
    },
    {
      id: 13,
      title: 'Creoles, fieldwork and linguistic theory – an interview with Peter Bakker',
      description: 'description',
      url: '/https://www.lingoblog.dk/en/interview-with-peter-bakker/',
      authors: 'Jeroen Willemsen & Kristoffer Friis Bøegh',
      year: 2019,
      language: "English",
      type: "blog"
    }
  ];

  getOverview(): Observable<PopularScienceArticle[]> {
    return of(this.articles);
  }
}
