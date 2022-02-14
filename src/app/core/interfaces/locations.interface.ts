
export interface LocationsStateI {
  loading: boolean;
  locations: LocationsResult[];
}
export interface LocationsI {
  info: InfoLocationEpisodesI;
  results: LocationsResult[];
}

export interface InfoLocationEpisodesI {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface LocationsResult {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}


export interface LocationsSearhcQuery {
  page: number;
  name: string;
}
