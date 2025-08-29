import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CaptionedImage} from '../models/captioned-image.model';

@Injectable({
  providedIn: 'root',
})
export class CaptionedImageService {
  private captionedImages: CaptionedImage[] = [
    {
      url: 'assets/images/man_making_birdcage.jpg',
      caption: 'A man making a bird cage from strips of bamboo'
    },
    {
      url: 'assets/images/man_with_rattan.jpg',
      caption: 'A man sitting down inside Mount Maru\'s crater after collecting some rattan'
    },
    {
      url: 'assets/images/me_and_man_drinking_coconut.jpg',
      caption: 'Me and a man drinking juice out of a cracked coconut'
    },
    {
      url: 'assets/images/me_and_man_laughing.jpg',
      caption: 'Me and a man after finding out the coconuts were in fact empty, and only given to us for the photo'
    },
    {
      url: 'assets/images/me_and_two_men.jpg',
      caption: 'Me and two men sitting in front of a house'
    },
    {
      url: 'assets/images/recording_in_hut.jpg',
      caption: 'Me and a man recording a story inside a hut'
    },
    {
      url: 'assets/images/recording_on_grave.jpg',
      caption: 'Me and a man recording a story on top of a grave'
    },
    {
      url: 'assets/images/three_kids.jpg',
      caption: 'Three kids inside a door opening'
    },
    {
      url: 'assets/images/three_women_carrying.jpg',
      caption: 'Three women carrying firewood up the slope'
    },
    {
      url: 'assets/images/three_women_smiling.jpg',
      caption: 'Three women smiling on their break from gathering edible plants during the hunger season'
    },
    {
      url: 'assets/images/traditional_hut_in_crater.jpg',
      caption: 'A traditional house inside Mount Maru\'s crater'
    },
    {
      url: 'assets/images/woman_carrying_water.jpg',
      caption: 'A woman carrying water up the slope'
    },
    {
      url: 'assets/images/woman_with_basket.jpg',
      caption: 'A woman with a basket gathering edible plants during the hunger season'
    },
  ];

  getCaptionedImages(): Observable<CaptionedImage[]> {
    return of(this.captionedImages);
  }
}
