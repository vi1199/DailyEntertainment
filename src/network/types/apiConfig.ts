export type logoSize =
  | 'w45'
  | 'w92'
  | 'w154'
  | 'w185'
  | 'w300'
  | 'w500'
  | 'original';
export type posterSize =
  | 'w92'
  | 'w154'
  | 'w185'
  | 'w342'
  | 'w500'
  | 'w780'
  | 'original';
export type backdropSize = 'w300' | 'w780' | 'w1280' | 'original';
export type profileSize = 'w45' | 'w185' | 'h632' | 'original';
export type stillSize = 'w92' | 'w185' | 'w300' | 'original';
export type imageSize =
  | logoSize
  | posterSize
  | backdropSize
  | profileSize
  | stillSize;

export interface ApiConfig {
  change_keys: Array<string>;
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: backdropSize;
    logo_sizes: logoSize;
    poster_sizes: posterSize;
    profile_sizes: profileSize;
    still_sizes: stillSize;
  };
}
