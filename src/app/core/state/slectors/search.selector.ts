import { CharactersStateI } from '@interfaces';
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/app.state';
import { SearchStateI } from '../../interfaces/global.interface';

export const searchFeature = (state: AppState) => state.search;

export const searchGlobalTerm = createSelector(
  searchFeature,
  (state: SearchStateI) => state.term
);
