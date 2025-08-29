import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Publication} from '../models/publication.model';

@Injectable({
  providedIn: 'root',
})
export class PublicationService {
  private publications: Publication[] = [
    {
      id: 0,
      filename: 'revised_dissertation_jeroen_willemsen.pdf',
      filenameAlt: 'dissertation_jeroen_willemsen.pdf',
      origloc: 'https://www.researchgate.net/publication/362209155_A_Grammar_of_Reta',
      origlocAlt: 'https://www.researchgate.net/publication/385870718_original_dissertation_jeroen_willemsen',
      title: 'A Grammar of Reta',
      reference: 'Willemsen, J. (2021).' +
        'A Grammar of Reta. Aarhus Universitet: PhD dissertation.',
      description: 'description',
      url: 'assets/articles/revised_dissertation_jeroen_willemsen.pdf',
      urlAlt: 'assets/publications/dissertation_jeroen_willemsen.pdf',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 1,
      filename: 'expression_of_vulgarity_preprint.pdf',
      filenameAlt: undefined,
      origloc: 'https://benjamins.com/catalog/sl.19073.wil',
      origlocAlt: undefined,
      title: 'The expression of vulgarity, force, severity and size: ' +
        'Phonaesthemic alternations in Reta and in other languages',
      reference: 'Willemsen, J. & Miltersen, E. H. (2020).' +
        'The expression of vulgarity, force, severity and size: ' +
        'Phonaesthemic alternations in Reta and in other languages.' +
        'Studies in Language, 44(3), 659–699.',
      description: 'description',
      url: 'assets/articles/expression_of_vulgarity_preprint.pdf',
      urlAlt: undefined,
      authors: 'Jeroen Willemsen & Ehm Hjorth Miltersen',
      year: 2020
    },
    {
      id: 2,
      filename: 'sloped_world_preprint.pdf',
      filenameAlt: undefined,
      origloc: 'https://iacpl.net/jopol/issues/journal-of-postcolonial-linguistics-52021/the-sloped-worlds-of-the-reta-language/',
      origlocAlt: undefined,
      title: 'The sloped world(s) of the Reta language: ' +
        'The expression of elevation in a montane language community',
      reference: 'Willemsen, J. (2021). The sloped world(s) of the Reta language: ' +
        'The expression of elevation in a montane language community. ' +
        'Journal of Postcolonial Linguistics, 5, 143–177. ' +
        'Special issue: Language and popular geopolitics.',
      description: 'description',
      url: 'assets/articles/sloped_world_preprint.pdf',
      urlAlt: undefined,
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 3,
      filename: 'reta_preprint.pdf',
      filenameAlt: undefined,
      origloc: 'https://www.degruyter.com/document/doi/10.1515/9781501511158/html',
      origlocAlt: undefined,
      title: 'Reta (sketch grammar)',
      reference: 'Willemsen, J. (2020). Reta. In A. Schapper (Ed.) ' +
        'Papuan Languages of Timor, Alor and Pantar: Volume 3. Sketch Grammars, 187–266. ' +
        'Berlin: Mouton de Gruyter.',
      description: 'description',
      url: 'assets/articles/reta_preprint.pdf',
      urlAlt: undefined,
      authors: 'Jeroen Willemsen',
      year: 2020
    },
    {
      id: 4,
      filename: 'vestigial_phonaesthemic_alternations_preprint.pdf',
      filenameAlt: undefined,
      origloc: 'https://www.degruyter.com/document/doi/10.1515/flin-2021-2004/html?lang=en',
      origlocAlt: undefined,
      title: 'Phonaesthemic alternations in Flemish dialects: ' +
        'a matter of language contact in the emergence of phonaesthesia?',
      reference: 'Robbe, J. and Willemsen, J. (2022)' +
        'Phonaesthemic alternations in Flemish dialects: ' +
        'a matter of language contact in the emergence of phonaesthesia?' +
        'Folia Linguistica, vol. 56(1), 57-86.',
      description: 'description',
      url: 'assets/articles/vestigial_phonaesthemic_alternations_preprint.pdf',
      urlAlt: undefined,
      authors: 'Joost Roger Robbe & Jeroen Willemsen',
      year: 2022
    },
    {
      id: 5,
      filename: 'lexirumah_review_preprint.pdf',
      filenameAlt: undefined,
      origloc: 'https://scholarspace.manoa.hawaii.edu/items/81a31960-2063-4609-89e8-7cd785201353',
      origlocAlt: undefined,
      title: 'Review of LexiRumah 3.0.0.',
      reference: 'Willemsen, J & Goldshtein, Y. (2020).' +
        'Review of LexiRumah 3.0.0' +
        'Language Documentation & Conservation 14. 692-702.',
      description: 'description',
      url: 'assets/articles/lexirumah_review_preprint.pdf',
      urlAlt: undefined,
      authors: 'Jeroen Willemsen & Yonatan Goldshtein',
      year: 2020
    },
    {
      id: 6,
      filename: 'on_languages_on_islands_preprint.pdf',
      filenameAlt: undefined,
      origloc: 'https://scholarspace.manoa.hawaii.edu/items/81a31960-2063-4609-89e8-7cd785201353',
      origlocAlt: undefined,
      title: 'On Languages On Islands',
      reference: 'Nash, J., Bakker, P., Bøegh, K. F., Daval-Markussen, A., Haberland, H., Kedwards, D., ' +
        'Ladhams, J., Levisen, C., Markússon, J. S., Robbe, J. R. & Willemsen, J. (2020): ' +
        'On languages on islands, Acta Linguistica Hafniensia 52(1). 81-116.',
      description: 'description',
      url: 'assets/articles/on_languages_on_islands_preprint.pdf',
      urlAlt: undefined,
      authors: 'Joshua Nash et al.',
      // authors: 'Joshua Nash, Peter Bakker, Kristoffer Friis Bøegh, Aymeric Daval-Markussen, Hartmut Haberland, ' +
      //   'Dale Kedwards, John Ladhams, Carsten Levisen, Jón Símon Markússon, Joost Robbe & Jeroen Willemsen',
      year: 2020
    },

  ];

  getPublications(): Observable<Publication[]> {
    return of(this.publications);
  }
}
