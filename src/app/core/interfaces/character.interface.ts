export interface CharactersStateI {
  loading: boolean;
  characters: Array<ResultCharacterI>;
}

export interface CharacterStateI {
  loading: boolean;
  character: ResultCharacterI;
}


export interface CharactersI {
  info: InfoPaginationI;
  results: ResultCharacterI[];
}

export interface InfoPaginationI {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface ResultCharacterI {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: LocationI;
  location?: LocationI;
  image?: string;
  episode?: string[];
  url?: string;
  created?: Date;
}

export interface LocationI {
  name: string;
  url: string;
}

export interface characterSearhcQuery {
  characters: string;
  name: string;
}
