import { EpisodesI, EpisodesStateI } from '@interfaces';
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/app.state';



export const selectEpisodesFeature = (state: AppState) => state.episodes;

export const selectListEpisodes = createSelector(
  selectEpisodesFeature,
  (state: EpisodesStateI) => state
);

export const selectEpisodesLoading = createSelector(
  selectEpisodesFeature,
  (state: EpisodesStateI) => state.loading
);
