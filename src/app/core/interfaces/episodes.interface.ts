export interface EpisodesStateI {
  loading: boolean;
  episodes: EpisodesI;
}

export interface EpisodesI {
  info: InfoPaginationEpisodesI;
  results: EpisodesResultI[];
}

export interface InfoPaginationEpisodesI {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface EpisodesResultI {
  id?: number;
  name?: string;
  air_date?: string;
  episode?: string;
  characters?: string[];
  url?: string;
  created?: Date;
}
export interface EpisodesSearhcQuery {
  page: number;
  name: string;
}
