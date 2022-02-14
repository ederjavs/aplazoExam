import {  CharactersStateI } from '@interfaces';
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/app.state';



export const selectCharactersFeature = (state: AppState) => state.characters;

export const selectListCharacters = createSelector(
  selectCharactersFeature,
  (state: CharactersStateI) => state
);

export const selectCharactersLoading = createSelector(
  selectCharactersFeature,
  (state: CharactersStateI) => state.loading
);
