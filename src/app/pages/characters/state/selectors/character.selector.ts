import {CharacterStateI } from '@interfaces';
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/app.state';

export const selectCharacterFeature = (state: AppState) => state.character;

export const selectShowCharacter = createSelector(
  selectCharacterFeature,
  (state: CharacterStateI) => state.character
);

export const selectCharacterLoading = createSelector(
  selectCharacterFeature,
  (state: CharacterStateI) => state.loading
);
