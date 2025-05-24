export interface dates {
  maximum: string;
  minimum: string;
}
export interface NowPlayingMoviesItems {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface NowPlayingMovies {
  dates: dates;
  page: number;
  results: Array<NowPlayingMoviesItems>;
  total_pages: number;
  total_results: number;
}
