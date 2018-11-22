import { CharacterThumbnail } from './CharacterThumbnail';
import { CharacterComics } from './CharacterComics';
import { CharacterSeries } from './CharacterSeries';
import { CharacterStories } from './CharacterStories';
import { CharacterUrl } from './CharacterUrl';

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: CharacterThumbnail;
  resourceURI: string;
  comics: CharacterComics;
  series: CharacterSeries;
  stories: CharacterStories;
  urls: CharacterUrl[];
}
