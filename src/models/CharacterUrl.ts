export enum CharacterUrlType {
  Comic = 'comiclink',
  Wiki = 'wiki',
  Details = 'detail',
}

export interface CharacterUrl {
  type: CharacterUrlType;
  url: string;
}
