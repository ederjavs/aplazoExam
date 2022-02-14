import { createReducer, on } from '@ngrx/store';

import { EpisodesStateI } from '@interfaces';
import { loadEpisodes, loadedEpisodes } from '../actions/episodes.actions';

export const initialState: EpisodesStateI = {
  loading: false,
  episodes: {
    info: { count: 0, pages: 0, next: '', prev: null },
    results: [],
  },
};

export const episodesReducer = createReducer(
  initialState,
  on(loadEpisodes, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedEpisodes, (state, items) => {
    console.log('aca');

    console.log(items);

    return { ...state, loading: false, episodes: items.episodes };
  })
);
