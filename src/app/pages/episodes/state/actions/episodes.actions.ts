import { EpisodesSearhcQuery, EpisodesI } from '@interfaces';
import { createAction, props } from '@ngrx/store';

export const loadEpisodes = createAction(
  '[Episodes List] load Episodes',
  props<{ params: EpisodesSearhcQuery }>()
);


export const loadedEpisodes = createAction(
  '[Episodes List] loaded Episodes',
  props<{ episodes: EpisodesI }>()
);
export const loadedEpisodesFailure = createAction(
  '[Episodes List] Loaded Failure',
  props<{ error: any }>()
);
